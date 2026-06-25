const https = require('https');

async function getRedirect(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.headers.location || res.statusCode);
    }).on('error', () => resolve('ERROR'));
  });
}

async function main() {
  const url = 'https://source.unsplash.com/800x800/?commercial,building';
  const loc = await getRedirect(url);
  console.log('Location:', loc);
}

main();
