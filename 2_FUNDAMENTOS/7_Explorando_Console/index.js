const x = 10;
const y = 'Wiliam';
const z = [1, 2];

console.log(x, y, z);

//Contagem de Impressões
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

//Variavel entre string
console.log("O nome é %s, ele é programador", y);

setTimeout(() => {
    console.clear();
}, 2000);