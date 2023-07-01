let x = 2023;
let y = parseInt(prompt('Digite seu ano de nascimento:'));
const nome = prompt('Digite seu primeiro nome:');
const sobrenome = prompt('Digite seu sobrenome:');

let idade = x - y;
alert(`Olá, seu nome é ${nome} ${sobrenome} e você tem ${idade} anos.`)