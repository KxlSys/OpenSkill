#!/usr/bin/env node

const path = require('path');
const { install } = require('../src/installer');

// ANSI colors for premium look
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

function printHelp() {
  console.log(`
${colors.bright}${colors.cyan}🚀 OpenSkill CLI${colors.reset} - Installez des compétences pour vos agents IA

${colors.bright}USAGE:${colors.reset}
  npx openskill add <repository> [options]

${colors.bright}ARGUMENTS:${colors.reset}
  <repository>            Dépôt GitHub (ex: KxlSys/OpenSkill), URL Git ou chemin local

${colors.bright}OPTIONS:${colors.reset}
  -s, --skill <name>      Installe une compétence spécifique au lieu de toutes les installer
  -h, --help              Affiche l'aide

${colors.bright}EXEMPLES:${colors.reset}
  npx openskill add KxlSys/OpenSkill
  npx openskill add KxlSys/OpenSkill --skill phishing-analysis
  npx openskill add ./mon-depot-local
`);
}

function parseArgs() {
  const args = process.argv.slice(2);
  
  if (args.includes('-h') || args.includes('--help')) {
    printHelp();
    process.exit(0);
  }

  const addIndex = args.indexOf('add');
  if (addIndex === -1) {
    console.error(`${colors.red}Erreur: Commande inconnue ou manquante. Seule la commande "add" est supportée.${colors.reset}`);
    printHelp();
    process.exit(1);
  }

  const repo = args[addIndex + 1];
  if (!repo) {
    console.error(`${colors.red}Erreur: Veuillez spécifier un dépôt à installer.${colors.reset}`);
    printHelp();
    process.exit(1);
  }

  // Parse options
  let skill = null;
  const skillIndex = args.findIndex(arg => arg === '--skill' || arg === '-s');
  if (skillIndex !== -1 && args[skillIndex + 1]) {
    skill = args[skillIndex + 1];
  }

  return { repo, skill };
}

async function main() {
  console.log(`${colors.bright}${colors.cyan}┌──────────────────────────────────────┐${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}│           🚀 OPENSKILL CLI           │${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}└──────────────────────────────────────┘${colors.reset}\n`);

  try {
    const { repo, skill } = parseArgs();
    await install(repo, { skill });
  } catch (error) {
    console.error(`\n${colors.red}❌ Une erreur est survenue : ${error.message}${colors.reset}`);
    process.exit(1);
  }
}

main();
