import fs from 'fs';
const content = fs.readFileSync('./public/index.html', 'utf-8');
const matches = content.match(/https:\/\/images\.unsplash\.com[^"']*/g);
console.log(matches.slice(0, 5).join('\n'));
