//o que sao vetores ou arrays
//como declarar um array

/*let array = ['string', 1, true];
console.log(array);*/

//pode guardar varios tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
//console.log(array[3]);

//forEach - itera um array
//array.forEach(function(item, index){console.log(item, index)});

//push - add item no final do array
//array.push(1);
//console.log(array);

//pop - remove item no final do array
//array.pop();
//console.log(array);

//shift - removo item do inicio do array
//array.shift();
//console.log(array);

//unshift - add item no inicio do array
//array.unshift('novo item no inicio');
//console.log(array);

//indexOff - retorna o indice de um valor
//console.log(array.indexOf(true));

//splice - remove ou substitui um item pelo indice
//array.splice(0, 3);
//console.log(array);

//slice - retorna uma parte de uma array existente
//let novoArray = array.slice(0, 3);
//console.log(novoArray);

//objetos
let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objetoInterno: 'objetoInterno'}};

console.log(object.objectInterno);

//destruturação do objeto
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);