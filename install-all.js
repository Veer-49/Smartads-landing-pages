const { execSync } = require('child_process');

const projects = [
  'cinema-spotlight-main',
  'magazine-mastery-main', 
  'newsy-lead-forge-main',
  'ott-ad-hub-main',
  'radio-connect-hub-main',
  'sky-high-ads-main',
  'sky-high-reach-main'
];

console.log('Installing dependencies for all projects...');

projects.forEach(project => {
  console.log(`\nInstalling dependencies for ${project}...`);
  try {
    execSync(`cd ${project} && npm install`, { stdio: 'inherit' });
    console.log(`✓ ${project} dependencies installed`);
  } catch (error) {
    console.error(`Error installing dependencies for ${project}:`, error.message);
  }
});

console.log('\n✓ All dependencies installed!');