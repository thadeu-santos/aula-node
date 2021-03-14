const fs = require('fs'); //importa módulo nativo

let dados = fs.readFileSync(__dirname + "/dados.txt", "utf-8");

console.log(dados);

