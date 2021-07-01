const fs = require('fs')

const file = process.argv[2]
const content = fs.readFileSync(file).toString()
  .replace(/\\/g, '')
  .replace(/ ---/g, '\n---')
  .replace(/ ([^\s-]*?):\s/g, '\n$1: ')
  .replace(/(.+:.+:.+)/g, '')
  .replace(/\: \|/, ': ')
  .split('\n')
  .map(line => /^.*?: - /.test(line) ? line.replace(/ - /g, '\n- ') : line)
  .filter(line => !/^layout: "- /.test(line))
  .filter(line => !/^email: /.test(line))
  .join('\n')
  
fs.writeFileSync(file.replace(/.html$/, '.md'),  content)
console.log({file})
