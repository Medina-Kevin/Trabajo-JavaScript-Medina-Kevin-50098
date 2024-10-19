//Ejercicio 1
let N1 = 2
let N2 = 3
function esPar(X) {
    if (X %2 === 0) {
        return true;
    } else {
        return false;
    } 
}
esPar(N1);
console.log(N1," es par:",esPar(N1))
esPar(N2);
console.log(N2," es par:",esPar(N2))

//Ejercicio 2
let celsius = prompt("Convertir de Celsius a Fahrenheit")
function convertirCelsiusAFahrenheit (celsius){
    let Fahrenheit = celsius * 1.8 + 32
    console.log(celsius+"°C son equivalentes a "+Fahrenheit+"°F")
}
convertirCelsiusAFahrenheit(celsius);