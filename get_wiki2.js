const https = require('https');

function searchDDGImages(query) {
  return new Promise((resolve, reject) => {
    // We can use a different engine, e.g., Wikimedia API to search for images of "electrician"
    https.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=0&gsrlimit=10&piprop=original`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages || {};
          const urls = Object.values(pages).filter(p => p.original).map(p => p.original.source);
          resolve(urls);
        } catch(e) { resolve([]); }
      });
    }).on('error', reject);
  });
}

async function main() {
  const queries = [
    'electrician at work',
    'plumber at work',
    'HVAC installation',
    'construction site crane',
    'house framing',
    'home renovation',
    'excavator construction',
    'roofer roof construction'
  ];
  for (const q of queries) {
    const urls = await searchDDGImages(q);
    console.log(`\n--- ${q} ---`);
    console.log(urls.join('\n'));
  }
}

main();
