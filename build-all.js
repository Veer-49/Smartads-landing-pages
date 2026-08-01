const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projects = [
  'cinema-spotlight-main',
  'magazine-mastery-main', 
  'newsy-lead-forge-main',
  'ott-ad-hub-main',
  'radio-connect-hub-main',
  'sky-high-ads-main',
  'sky-high-reach-main'
];

const folderNames = [
  'cinema-spotlight',
  'magazine-mastery',
  'newsy-lead-forge',
  'ott-ad-hub',
  'radio-connect-hub',
  'sky-high-ads',
  'sky-high-reach'
];

console.log('Building all projects for single-domain deployment...');

projects.forEach((project, index) => {
  console.log(`\nBuilding ${project}...`);
  
  try {
    // Build the project
    execSync(`cd ${project} && npm run build`, { stdio: 'inherit' });
    
    // Copy built files to subdirectory
    const sourceDir = path.join(__dirname, project, '.output', 'public');
    const targetDir = path.join(__dirname, folderNames[index]);
    
    // Remove target directory if it exists
    if (fs.existsSync(targetDir)) {
      fs.rmSync(targetDir, { recursive: true, force: true });
    }
    
    // Create target directory
    fs.mkdirSync(targetDir, { recursive: true });
    
    // Copy files recursively
    const copyRecursive = (src, dest) => {
      const entries = fs.readdirSync(src, { withFileTypes: true });
      entries.forEach(entry => {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
          fs.mkdirSync(destPath, { recursive: true });
          copyRecursive(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      });
    };
    
    if (fs.existsSync(sourceDir)) {
      copyRecursive(sourceDir, targetDir);
      console.log(`✓ ${project} built and copied to ${folderNames[index]}/`);
    } else {
      console.log(`✗ Build output not found for ${project}`);
    }
  } catch (error) {
    console.error(`Error building ${project}:`, error.message);
  }
});

console.log('\n✓ All builds completed!');
console.log('Projects are now in subdirectories ready for deployment.');
console.log('\nFolder structure:');
folderNames.forEach(name => console.log(`  /${name}`));