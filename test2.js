const YAML = require('yaml');
const fs = require('fs');

const file = fs.readFileSync('.github/workflows/first.yml', 'utf8');
const data = YAML.parse(file);
console.log(data)
// console.log(typeof data.app.date,typeof data.app.debug);

Object.entries(data.app).forEach(([K,V])=>{
   console.log(typeof V,V)
})