const fs = require('fs');

fs.readFile('test_logo.png', (err, data) => {
  if (err) throw err;
  
  // PNG signature: 89 50 4E 47 0D 0A 1A 0A
  
  // To keep it simple, let's just find the first IDAT chunk and decompress it? Too hard.
  // We can just use a shell command like `hexdump` or `strings`.
});
