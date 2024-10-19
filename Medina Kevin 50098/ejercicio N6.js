//Ejercicio 1
let ArregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let PorDos = [];
for (let i = 0; i < 10; i++) {
    PorDos[i] = ArregloNumeros[i] * 2;
}
console.log("Los numeros originales son: ", ArregloNumeros)
console.log("Multiplicados por 2 son: ", PorDos)
//Ejercicio 2
let Pares = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}