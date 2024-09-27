// Solicitar o nome e a experiência do herói
const prompt = require('prompt-sync')();  // Para simular o input no Node.js
let nomeDoHeroi = prompt("Digite o nome do herói: ");
let xpDoHeroi = parseInt(prompt("Digite a quantidade de XP do herói: "));

while (xpDoHeroi < 0) {
    console.log("A quantidade de XP deve ser positiva. Por favor, tente novamente.");
    xpDoHeroi = parseInt(prompt("Digite a quantidade de XP do herói: "));
}

let nivelDoHeroi = "";

if (xpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

// Exibir o resultado final
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
