// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)

// - Una variable que contenga tu altura en metros (número de coma flotante)

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

// - Una variable que contenga tu altura en metros redondeada hacia arriba

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

let altura = 178
let alturaFloat = 1.78 
let peso = 65.4
let alturaRound = Math.ceil(alturaFloat)
let pesoRound = Math.floor(peso)

let maxJS = Number.MAX_VALUE + 1
let maxJS2 = Number.MAX_VALUE

console.log(maxJS === maxJS2)