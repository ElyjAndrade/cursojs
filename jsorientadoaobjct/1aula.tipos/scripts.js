//TIPOS PRIMITIVOS

var idade = 18; //ou seja idade é do tipo number/numero
var sexo = 'F';
var nome = 'Ely';
var existe = true; // valor boleaano para tomada de decisão
var endereço = null;  // vazio e retorna tipo object
// todos os valores com exceção de undefined e null são true

var primeiroChar = nome.charAt(0); // em js a contagem funciona assim 0,1,2...
var nomeMaiusc = nome.toUpperCase();

// operador de igual 3x comparação
 // typeof mostra o tipo do dado

// TIPOS DE REFERÊNCIA
var pessoa = new Object();
var pessoa2 = {
    'nome': 'Ely', 
    'idade': '21', 
    'sexo': 'M'
};
// objeto literal sem usar 'new', coleção de chaves e valores. 
var mostraNome = new Function("console.log('Ely');");
mostraNome()

var carro = new Array('Gol', 'Uno', 'Corolla')
console.log(carro);

var carros = ['Gol', 'Uno', 'Corolla'];
console.log(carros)