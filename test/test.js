const assert = require('assert');
const path = require('path');
const fs = require('fs');
const os = require('os');
const { getRepoDetails, scanDirectoryForSkills, install } = require('../src/installer');

console.log('🧪 Running OpenSkill Tests...\n');

// Test 1: getRepoDetails
try {
  const localRes = getRepoDetails('.');
  assert.strictEqual(localRes.type, 'local');
  assert.strictEqual(localRes.url, path.resolve('.'));

  const gitRes = getRepoDetails('https://github.com/KxlSys/OpenSkill.git');
  assert.strictEqual(gitRes.type, 'git');
  assert.strictEqual(gitRes.url, 'https://github.com/KxlSys/OpenSkill.git');

  const githubRes = getRepoDetails('KxlSys/OpenSkill');
  assert.strictEqual(githubRes.type, 'git');
  assert.strictEqual(githubRes.url, 'https://github.com/KxlSys/OpenSkill.git');

  // Verify that invalid/malicious inputs throw errors
  const invalidRepos = [
    'owner/repo; rm -rf /',
    'git@github.com:owner/repo;cmd',
    'https://github.com/owner/repo/inject;cmd',
    'http://safe.com/inject && cmd',
    'owner/repo space',
    'invalid#chars/repo',
    12345,
    null,
    undefined
  ];

  for (const badRepo of invalidRepos) {
    assert.throws(() => {
      getRepoDetails(badRepo);
    }, `Should throw an error for invalid repo: ${badRepo}`);
  }

  console.log('✅ Test 1: getRepoDetails passed!');
} catch (err) {
  console.error('❌ Test 1: getRepoDetails failed!', err);
  process.exit(1);
}

// Test 2: scanDirectoryForSkills
try {
  const skills = scanDirectoryForSkills(path.resolve('.'));
  
  // We expect to find 6 skills in the skills/ folder: phishing-analysis, ad-audit, linux-hardening, kubernetes-review, prompt-engineering, openpua
  assert.strictEqual(skills.length, 6);
  
  const phishing = skills.find(s => s.name === 'phishing-analysis');
  assert.ok(phishing);
  assert.ok(phishing.path.includes('phishing-analysis'));

  const adAudit = skills.find(s => s.name === 'ad-audit');
  assert.ok(adAudit);

  const linuxHardening = skills.find(s => s.name === 'linux-hardening');
  assert.ok(linuxHardening);

  const k8sReview = skills.find(s => s.name === 'kubernetes-review');
  assert.ok(k8sReview);

  const promptEng = skills.find(s => s.name === 'prompt-engineering');
  assert.ok(promptEng);

  const openpua = skills.find(s => s.name === 'openpua');
  assert.ok(openpua);

  console.log('✅ Test 2: scanDirectoryForSkills passed!');
} catch (err) {
  console.error('❌ Test 2: scanDirectoryForSkills failed!', err);
  process.exit(1);
}

// Test 3: Local installation of all skills (registry-driven)
try {
  const testDest = path.join(process.cwd(), 'test-dest');
  
  // Mock process.cwd to return testDest for this test
  const originalCwd = process.cwd;
  process.cwd = () => testDest;

  // Clean up if previous tests left artifacts
  if (fs.existsSync(testDest)) {
    fs.rmSync(testDest, { recursive: true, force: true });
  }

  // Install all skills from local workspace (which has registry.json)
  const srcWorkspace = path.resolve(__dirname, '..');
  
  // Run installation
  install(srcWorkspace).then(() => {
    // Check if skills are installed
    const installedPhishing = path.join(testDest, '.agents', 'skills', 'phishing-analysis', 'SKILL.md');
    assert.ok(fs.existsSync(installedPhishing));
    
    const installedHardening = path.join(testDest, '.agents', 'skills', 'linux-hardening', 'SKILL.md');
    assert.ok(fs.existsSync(installedHardening));

    const installedOpenPua = path.join(testDest, '.agents', 'skills', 'openpua', 'SKILL.md');
    assert.ok(fs.existsSync(installedOpenPua));

    console.log('✅ Test 3: Registry-driven install passed!');
    
    // Clean up
    fs.rmSync(testDest, { recursive: true, force: true });
    process.cwd = originalCwd;
    
    runTest4();
  }).catch(err => {
    console.error('❌ Test 3: Registry-driven install failed!', err);
    process.exit(1);
  });
} catch (err) {
  console.error('❌ Test 3: Registry-driven install failed!', err);
  process.exit(1);
}

// Test 4: Local installation of a single skill
function runTest4() {
  try {
    const testDest = path.join(process.cwd(), 'test-dest-single');
    const originalCwd = process.cwd;
    process.cwd = () => testDest;

    if (fs.existsSync(testDest)) {
      fs.rmSync(testDest, { recursive: true, force: true });
    }

    const srcWorkspace = path.resolve(__dirname, '..');

    install(srcWorkspace, { skill: 'openpua' }).then(() => {
      // Check that only openpua is installed
      const installedOpenPua = path.join(testDest, '.agents', 'skills', 'openpua', 'SKILL.md');
      assert.ok(fs.existsSync(installedOpenPua));

      const installedPhishing = path.join(testDest, '.agents', 'skills', 'phishing-analysis', 'SKILL.md');
      assert.ok(!fs.existsSync(installedPhishing));

      console.log('✅ Test 4: Single skill install passed!');
      
      // Clean up
      fs.rmSync(testDest, { recursive: true, force: true });
      process.cwd = originalCwd;
      
      runTest5();
    }).catch(err => {
      console.error('❌ Test 4: Single skill install failed!', err);
      process.exit(1);
    });
  } catch (err) {
    console.error('❌ Test 4: Single skill install failed!', err);
    process.exit(1);
  }
}

// Test 5: Scan fallback (registry.json missing)
function runTest5() {
  const tempWorkspace = fs.mkdtempSync(path.join(os.tmpdir(), 'openskill-test-'));
  const testDest = path.join(process.cwd(), 'test-dest-fallback');
  const originalCwd = process.cwd;
  
  try {
    // Copy workspace to tempWorkspace
    const srcWorkspace = path.resolve(__dirname, '..');
    fs.cpSync(srcWorkspace, tempWorkspace, { recursive: true });
    
    // Delete registry.json from temp workspace to force fallback
    const tempRegistry = path.join(tempWorkspace, 'registry.json');
    if (fs.existsSync(tempRegistry)) {
      fs.unlinkSync(tempRegistry);
    }
    
    process.cwd = () => testDest;
    if (fs.existsSync(testDest)) {
      fs.rmSync(testDest, { recursive: true, force: true });
    }
    
    install(tempWorkspace).then(() => {
      // Check that skills are still installed via scan fallback
      const installedPhishing = path.join(testDest, '.agents', 'skills', 'phishing-analysis', 'SKILL.md');
      assert.ok(fs.existsSync(installedPhishing));
      
      const installedOpenPua = path.join(testDest, '.agents', 'skills', 'openpua', 'SKILL.md');
      assert.ok(fs.existsSync(installedOpenPua));

      console.log('✅ Test 5: Scan fallback install passed!');
      
      // Clean up
      fs.rmSync(testDest, { recursive: true, force: true });
      fs.rmSync(tempWorkspace, { recursive: true, force: true });
      process.cwd = originalCwd;
      
      console.log('\n🎉 All tests passed successfully!');
    }).catch(err => {
      console.error('❌ Test 5: Scan fallback install failed!', err);
      fs.rmSync(tempWorkspace, { recursive: true, force: true });
      process.cwd = originalCwd;
      process.exit(1);
    });
  } catch (err) {
    console.error('❌ Test 5: Scan fallback install failed!', err);
    if (fs.existsSync(tempWorkspace)) {
      fs.rmSync(tempWorkspace, { recursive: true, force: true });
    }
    process.cwd = originalCwd;
    process.exit(1);
  }
}
