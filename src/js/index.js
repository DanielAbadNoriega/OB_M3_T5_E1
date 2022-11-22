//Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 173;

//Una variable que contenga tu altura en metros (número de coma flotante)
let alturaM = 1.73;

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKg = 78.3;

//Una variable que contenga tu altura en metros redondeada hacia arriba
let altura = Math.round(alturaM);
console.log(altura);

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso = Math.floor(pesoKg);
console.log(peso);

//Una variable que contenga si 
//"el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let max_valor_JS = ((Number.MAX_VALUE + 1) === Number.MAX_VALUE );

console.log(max_valor_JS);