const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const headersFile = join(__dirname, 'build', '_headers');
let contents = readFileSync(headersFile, 'utf-8');
contents = contents.replace('/blog\n', '/blog/*\n');
writeFileSync(headersFile, contents);
console.log('Headers modified. 👍');
