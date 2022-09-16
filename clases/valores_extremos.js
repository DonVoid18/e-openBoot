// como convertir los string a valores numéricos con Number, parseInt, parseFloat
let numero = "12.2"
let num2 = 12
console.log(Number(numero) + num2)
console.log(parseInt(numero) + num2)
console.log(parseFloat(numero) + num2)

// números hexadecimales
// se utiliza bastante en la asignación de memoria
let numHex = "0x3a5b7"
// todos los numeros hexadecimales empiezan por "0x" notación

console.log(parseInt(numHex))

// obtener los valores máximo y mínimo en javascript
let min_presition = Number.EPSILON
let min_valor_js = Number.MIN_VALUE
let max_valor_js = Number.MAX_VALUE 

console.log(min_presition)
console.log(min_valor_js)
console.log(max_valor_js)
