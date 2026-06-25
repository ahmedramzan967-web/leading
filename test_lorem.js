const https = require('https');

async function test(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.headers.location || res.statusCode);
    }).on('error', () => resolve('ERROR'));
  });
}

async function main() {
  const url = 'https://loremflickr.com/800/800/plumber,working/all';
  console.log(await test(url));
}
main();
