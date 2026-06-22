const assert = require('assert');
const path = require('path');
const fs = require('fs');
const { getRepoDetails, scanDirectoryForSkills, install } = require('../src/installer');

console.log('🧪 Running OpenSkills Tests...\n');

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

  console.log('✅ Test 1: getRepoDetails passed!');
} catch (err) {
  console.error('❌ Test 1: getRepoDetails failed!', err);
  process.exit(1);
}

// Test 2: scanDirectoryForSkills
try {
  const skills = scanDirectoryForSkills(path.resolve('.'));
  
  // We expect to find 5 skills: phishing-analysis, ad-audit, linux-hardening, kubernetes-review, prompt-engineering
  assert.strictEqual(skills.length, 5);
  
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

  console.log('✅ Test 2: scanDirectoryForSkills passed!');
} catch (err) {
  console.error('❌ Test 2: scanDirectoryForSkills failed!', err);
  process.exit(1);
}

// Test 3: Local installation of all skills
try {
  const testDest = path.join(process.cwd(), 'test-dest');
  
  // Mock process.cwd to return testDest for this test
  const originalCwd = process.cwd;
  process.cwd = () => testDest;

  // Clean up if previous tests left artifacts
  if (fs.existsSync(testDest)) {
    fs.rmSync(testDest, { recursive: true, force: true });
  }

  // Install all skills from local workspace (which is path.resolve(__dirname, '..'))
  const srcWorkspace = path.resolve(__dirname, '..');
  
  // Run installation
  install(srcWorkspace).then(() => {
    // Check if skills are installed
    const installedPhishing = path.join(testDest, '.agents', 'skills', 'phishing-analysis', 'SKILL.md');
    assert.ok(fs.existsSync(installedPhishing));
    
    const installedHardening = path.join(testDest, '.agents', 'skills', 'linux-hardening', 'SKILL.md');
    assert.ok(fs.existsSync(installedHardening));

    console.log('✅ Test 3: Local install of all skills passed!');
    
    // Clean up
    fs.rmSync(testDest, { recursive: true, force: true });
    
    // Restore CWD
    process.cwd = originalCwd;
    
    runTest4();
  }).catch(err => {
    console.error('❌ Test 3: Local install of all skills failed!', err);
    process.exit(1);
  });
} catch (err) {
  console.error('❌ Test 3: Local install of all skills failed!', err);
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

    install(srcWorkspace, { skill: 'linux-hardening' }).then(() => {
      // Check that only linux-hardening is installed
      const installedHardening = path.join(testDest, '.agents', 'skills', 'linux-hardening', 'SKILL.md');
      assert.ok(fs.existsSync(installedHardening));

      const installedPhishing = path.join(testDest, '.agents', 'skills', 'phishing-analysis', 'SKILL.md');
      assert.ok(!fs.existsSync(installedPhishing));

      console.log('✅ Test 4: Local install of single skill passed!');
      
      // Clean up
      fs.rmSync(testDest, { recursive: true, force: true });
      process.cwd = originalCwd;
      
      console.log('\n🎉 All tests passed successfully!');
    }).catch(err => {
      console.error('❌ Test 4: Local install of single skill failed!', err);
      process.exit(1);
    });
  } catch (err) {
    console.error('❌ Test 4: Local install of single skill failed!', err);
    process.exit(1);
  }
}
