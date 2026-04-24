const yaml = require('js-yaml');
const fs = require('fs');

const file = fs.readFileSync('.github/workflows/first.yml', 'utf8');
const data = yaml.load(file);

// console.log("Parsed value:", data.app.debug);
// console.log("Type:", typeof data.app.debug);

// console.log("Parsed value:", data.app.port);
// console.log("Type:", typeof data.app.port);

// console.log("Parsed value:", data.app.time);
// console.log("Type:", typeof data.app.time);

// //ocatalValue
// console.log("Parsed value:", data.app.ocatalValue);
// console.log("Type:", typeof data.app.ocatalValue);

// console.log("Parsed value:", data.app.date.getFullYear());
// console.log("Type:", typeof data.app.date);

// // Simulated YAML 1.1 behavior
// const simulated = (20 * 60) + 20;
// console.log("If parsed differently:", simulated);

Object.entries(data.app).forEach(([K,V])=>{
   console.log(typeof V,V)
})