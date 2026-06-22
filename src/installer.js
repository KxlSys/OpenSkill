const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m'
};

function getRepoDetails(repo) {
  // Check if it looks like a local path
  if (repo.startsWith('.') || repo.startsWith('/') || repo.startsWith('\\') || path.isAbsolute(repo)) {
    return { type: 'local', url: path.resolve(repo) };
  }
  
  // Check if it's a Git SSH/HTTPS URL
  if (repo.startsWith('git@') || repo.startsWith('https://') || repo.startsWith('http://')) {
    return { type: 'git', url: repo };
  }

  // Otherwise, assume GitHub shorthand: owner/repo
  if (repo.includes('/')) {
    return { type: 'git', url: `https://github.com/${repo}.git` };
  }

  throw new Error(`Format de dépôt non reconnu : "${repo}"`);
}

function scanDirectoryForSkills(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  // Check if this directory itself contains SKILL.md
  const hasSkillMd = items.some(item => item.isFile() && item.name.toLowerCase() === 'skill.md');
  if (hasSkillMd) {
    const skillMdFile = items.find(item => item.isFile() && item.name.toLowerCase() === 'skill.md');
    const skillMdPath = path.join(dir, skillMdFile.name);
    
    // Parse name from frontmatter
    let skillName = null;
    try {
      const content = fs.readFileSync(skillMdPath, 'utf8');
      const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (match) {
        const yamlLines = match[1].split(/\r?\n/);
        for (const line of yamlLines) {
          const nameMatch = line.match(/^name:\s*(['"]?)(.*?)\1\s*$/);
          if (nameMatch) {
            skillName = nameMatch[2].trim();
            break;
          }
        }
      }
    } catch (e) {
      // Ignore reading error, fallback to folder name
    }
    
    // Fallback to directory name if name frontmatter not found
    if (!skillName) {
      skillName = path.basename(dir);
    }
    
    results.push({
      name: skillName,
      path: dir,
      skillMdPath
    });
    
    return results;
  }
  
  // Recurse into subdirectories, ignoring common ignored folders
  for (const item of items) {
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
      scanDirectoryForSkills(path.join(dir, item.name), results);
    }
  }
  
  return results;
}

async function install(repo, options = {}) {
  const details = getRepoDetails(repo);
  const targetSkillName = options.skill;

  let sourceDir = '';
  let tempDir = null;

  if (details.type === 'local') {
    console.log(`${colors.cyan}🔍 Recherche de compétences locales dans : ${colors.bright}${details.url}${colors.reset}`);
    sourceDir = details.url;
  } else {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'openskill-'));
    console.log(`${colors.cyan}📥 Téléchargement du dépôt : ${colors.bright}${details.url}${colors.reset}...`);
    try {
      execSync(`git clone --depth 1 "${details.url}" "${tempDir}"`, { stdio: 'ignore' });
      sourceDir = tempDir;
    } catch (err) {
      // Clean up temp dir if exists
      if (tempDir && fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true, force: true });
      }
      throw new Error(`Échec du clonage du dépôt Git "${details.url}". Veuillez vérifier l'URL et votre connexion Internet.`);
    }
  }

  try {
    let allSkills = [];
    const registryPath = path.join(sourceDir, 'registry.json');
    
    if (fs.existsSync(registryPath)) {
      try {
        const registryContent = fs.readFileSync(registryPath, 'utf8');
        const registryData = JSON.parse(registryContent);
        if (registryData && Array.isArray(registryData.skills)) {
          for (const item of registryData.skills) {
            if (item.name && item.path) {
              const fullSkillMdPath = path.join(sourceDir, item.path);
              if (fs.existsSync(fullSkillMdPath)) {
                allSkills.push({
                  name: item.name,
                  path: path.dirname(fullSkillMdPath),
                  skillMdPath: fullSkillMdPath
                });
              } else {
                console.log(`${colors.yellow}⚠️ Compétence "${item.name}" listée dans le registre mais introuvable à la destination : ${item.path}${colors.reset}`);
              }
            }
          }
        }
      } catch (err) {
        console.log(`${colors.yellow}⚠️ Impossible de charger registry.json : ${err.message}. Passage en mode scan automatique.${colors.reset}`);
      }
    }

    // Fallback to directory scan if registry is missing or didn't find any skills
    if (allSkills.length === 0) {
      allSkills = scanDirectoryForSkills(sourceDir);
    }
    
    if (allSkills.length === 0) {
      console.log(`\n${colors.yellow}⚠️ Aucune compétence (contenant un fichier SKILL.md) n'a été trouvée dans le dépôt.${colors.reset}`);
      return;
    }

    let skillsToInstall = [];
    if (targetSkillName) {
      const match = allSkills.find(s => s.name.toLowerCase() === targetSkillName.toLowerCase());
      if (!match) {
        throw new Error(`La compétence "${targetSkillName}" n'a pas été trouvée dans le dépôt.`);
      }
      skillsToInstall = [match];
    } else {
      skillsToInstall = allSkills;
    }

    console.log(`${colors.cyan}⚙️ Installation des compétences...${colors.reset}\n`);

    const destBaseDir = path.join(process.cwd(), '.agents', 'skills');
    if (!fs.existsSync(destBaseDir)) {
      fs.mkdirSync(destBaseDir, { recursive: true });
    }

    for (const skill of skillsToInstall) {
      const destDir = path.join(destBaseDir, skill.name);
      
      // Clear target directory if it exists to overwrite cleanly
      if (fs.existsSync(destDir)) {
        fs.rmSync(destDir, { recursive: true, force: true });
      }
      fs.mkdirSync(destDir, { recursive: true });
      
      // Copy recursively
      fs.cpSync(skill.path, destDir, { recursive: true });
      
      console.log(`  ${colors.green}✓${colors.reset} ${colors.bright}${skill.name}${colors.reset} -> ${colors.dim}.agents/skills/${skill.name}/${colors.reset}`);
    }

    console.log(`\n${colors.green}${colors.bright}🎉 Installation réussie de ${skillsToInstall.length} compétence(s) !${colors.reset}`);

  } finally {
    // Cleanup temporary directory
    if (tempDir && fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  }
}

module.exports = {
  install,
  getRepoDetails,
  scanDirectoryForSkills
};
