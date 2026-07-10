const https = require('https');
https.get('https://lh3.googleusercontent.com/d/1QNxqz9qAf_ineMh22RBo4WMO6M8EDcgI', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers['content-type']);
});
