const https = require('https');

function search(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=3`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch(e) {
          console.error("Parse error:", data.substring(0, 100));
          resolve({});
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  const queries = ['commercial building construction', 'residential home construction', 'home addition renovation', 'building rehabilitation remodel', 'civil engineering sitework', 'roofing worker', 'electrician working on site', 'plumber working on site', 'hvac mechanical worker site'];
  for (const q of queries) {
    const result = await search(q);
    console.log(`\n--- ${q} ---`);
    if (result.results) {
      result.results.forEach(r => console.log(r.id, r.alt_description));
    }
  }
}

main();
