const fs = require('fs');

let allOrNothingRead = fs.readFileSync('allornothing.json');
let allOrNothing = JSON.parse(allOrNothingRead);

console.log(allOrNothing);