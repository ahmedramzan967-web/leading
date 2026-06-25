const https = require('https');

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode === 200 ? 'OK' : res.statusCode);
    }).on('error', () => resolve('ERROR'));
  });
}

async function main() {
  const ids = [
    '1541888086425-d81bb19240f5', // commercial
    '1512917774080-9991f1c4c750', // residential
    '1581094794329-c8112a89af12', // addition
    '1589939705384-5185137a7f0f', // rehab
    '1545459720-aac8509eb02c', // civil
    '1632759145351-1d592919f522', // roofing
    '1505798577917-a65157d3320a', // electrician working
    '1585704032915-c3400ca199e7', // plumber working
    '1610491462702-42e6ecd6a125', // hvac tech
    '1504328345606-18bbc8c9d7d1', // hvac
    '1581092160562-40aa08e78837', // electrician
    '1607472586893-edb57cb6412b'  // plumber
  ];
  for (const id of ids) {
    const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=100&h=100`;
    const status = await checkUrl(url);
    console.log(`${id}: ${status}`);
  }
}
main();
