const https = require('https');

function searchWiki(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=0&gsrlimit=3&piprop=original`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const urls = Object.values(pages).filter(p => p.original).map(p => p.original.source);
          resolve(urls);
        } catch(e) { resolve([]); }
      });
    }).on('error', reject);
  });
}

async function main() {
  const queries = [
    'skyscraper construction',
    'house framing construction',
    'home renovation',
    'building restoration',
    'excavator civil engineering',
    'roofer roofing',
    'electrician wiring',
    'plumber pipes',
    'HVAC technician'
  ];
  for (const q of queries) {
    const urls = await searchWiki(q);
    console.log(`\n--- ${q} ---`);
    console.log(urls.join('\n'));
  }
}

main();
