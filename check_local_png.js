const fs = require('fs');

function checkFile(filename) {
  try {
    const stats = fs.statSync(filename);
    console.log(`${filename}: ${stats.size} bytes`);
  } catch (e) {
    console.log(`${filename}: not found`);
  }
}
checkFile('public/logo_white.png');
checkFile('public/logo_transparent.png');
checkFile('public/logo_clean.png');
