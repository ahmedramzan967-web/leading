const https = require('https');

function searchDDG(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+/g)];
        if (matches.length > 0) {
          const urls = [...new Set(matches.map(m => m[0]))];
          resolve(urls.slice(0, 3));
        } else {
          resolve([]);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  const queries = [
    'site:unsplash.com commercial construction site',
    'site:unsplash.com residential house construction framing',
    'site:unsplash.com home renovation remodel',
    'site:unsplash.com building rehabilitation remodel',
    'site:unsplash.com civil engineering sitework excavator',
    'site:unsplash.com roofing construction roofer',
    'site:unsplash.com electrician working on site',
    'site:unsplash.com plumber working pipes',
    'site:unsplash.com hvac technician mechanical'
  ];
  for (const q of queries) {
    const urls = await searchDDG(q);
    console.log(`\n--- ${q} ---`);
    console.log(urls.join('\n'));
  }
}

main();
