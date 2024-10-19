//Ejercicio 1
let persona = {
    nombre: "Tito",
    edad: "18",
    ciudad:"Madrid",
    NuevaCiudad: function (CiudadNueva) {
        this.ciudad=CiudadNueva
    }
}
console.log("Nombre: ",persona.nombre+", "+"Edad: ",persona.edad+", "+"Ciudad anterior: "+persona.ciudad)
let NuevoNuevo = prompt("Ingrese su nueva ciudad: ");
persona.NuevaCiudad(NuevoNuevo);
console.log("Nombre: ",persona.nombre+", "+"Edad: ",persona.edad+", "+"Ciudad nueva: "+persona.ciudad)
//Ejercicio 2
let Libro ={
    NombreLibro: prompt("Ingrese el titulo"),
    NombreAutor: prompt("Ingrese el autor"),
    AñoPublicado: prompt("Ingrese el año publicado"),
    Mas10: function(AñoPublicado) {
        if ((2024 - AñoPublicado) > 10) {
            return true;
        } else {
            return false;

        }
    },
};
console.log("El libro ", Libro.NombreLibro ," de ", Libro.NombreAutor ," es antiguo: ", Libro.Mas10(Libro.AñoPublicado));