const https = require('https');

function searchPexels(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://www.pexels.com/search/${encodeURIComponent(query)}/`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/https:\/\/images\.pexels\.com\/photos\/(\d+)\/pexels-photo-\1\.jpeg/g)];
        if (matches.length > 0) {
          // get unique
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
    'commercial-construction',
    'house-construction',
    'home-renovation',
    'building-rehabilitation',
    'civil-engineering-construction',
    'roofing-construction',
    'electrician-working',
    'plumber-working',
    'hvac-technician'
  ];
  for (const q of queries) {
    const urls = await searchPexels(q);
    console.log(`\n--- ${q} ---`);
    console.log(urls.join('\n'));
  }
}

main();
