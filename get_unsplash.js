const https = require('https');

function searchUnsplashHTML(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://unsplash.com/s/photos/${encodeURIComponent(query)}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/images\.unsplash\.com\/photo-([a-zA-Z0-9\-]+)\?/g)];
        if (matches.length > 0) {
          const ids = [...new Set(matches.map(m => m[1]))];
          resolve(ids.slice(0, 3));
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
    'civil-engineering-excavator',
    'roofing-construction',
    'electrician-working',
    'plumber-working',
    'hvac-technician'
  ];
  for (const q of queries) {
    const ids = await searchUnsplashHTML(q);
    console.log(`\n--- ${q} ---`);
    console.log(ids.join('\n'));
  }
}

main();
