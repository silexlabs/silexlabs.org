var fs = require('fs')
  , fm = require('front-matter')


const files = fs.readdirSync('_posts')
// console.log({files})

files
// .filter((file, idx) => idx === 0)
.forEach(file => {
  const path = '_posts/' + file
  const data = fs.readFileSync(path, 'utf8')
  const content = fm(data)
  delete content.attributes.slug
  delete content.attributes.link
  delete content.attributes.wordpress_id
  delete content.attributes.excerpt
  console.log(file, content.attributes.excerpt)
  fs.writeFileSync(path, `---
${ Object.keys(content.attributes).map(key => `${key}: ${JSON.stringify(content.attributes[key])}
`).join('') }
---
${ content.body }
`)
})
