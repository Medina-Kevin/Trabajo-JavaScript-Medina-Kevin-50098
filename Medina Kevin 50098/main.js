//Seccion 1 
//Ejercicio N7
const p = document.getElementById('pElement')
const button = document.getElementById('button')

const hadleStyleButton = () => {
    if (p.classList.contains('ColorButton')) {
        p.classList.remove('ColorButton')
    } else {
        p.classList.add('ColorButton')
    }

}
button.addEventListener("click", () => {
    console.log("El usuario hizo click")
    hadleStyleButton();
})

//Ejercicio 7.1
const buttonInput = document.getElementById('buttonInput')

const obtenerInformacion = () => {
    const textoinput = document.getElementById('inputTexto').value;
    alert("Usted ha ingresado: " + textoinput);
}
buttonInput.addEventListener("click", () => {
    obtenerInformacion();

});

//Ejercicio N8
const elemento1 = document.getElementById(ele1);
ele1.addEventListener("click", () => {
    console.log(document.getElementById("ele1").textContent);
})
const elemento2 = document.getElementById(ele2);
ele2.addEventListener("click", () => {
    console.log(document.getElementById("ele2").textContent);
})
const elemento3 = document.getElementById(ele3);
ele3.addEventListener("click", () => {
    console.log(document.getElementById("ele3").textContent);
})
const elemento4 = document.getElementById(ele4);
ele4.addEventListener("click", () => {
    console.log(document.getElementById("ele4").textContent);
})

//Ejercicio 8.1
const botonDisable = document.getElementById('botonDisable');
const inputalgo = document.getElementById('inputalgo');
const botonEnable = document.getElementById('botonEnable')
botonDisable.addEventListener("click", () => {
    inputalgo.disabled = true;
})
botonEnable.addEventListener("click", () => {
    inputalgo.disabled = false;
})

//Ejercicio 9
const buttoncorreo = document.getElementById('buttoncorreo');
const getCorreo = () => {
    const gmail = document.getElementById('gmail').value;
    localStorage.setItem("datos",JSON.stringify({gmail}))
    if (gmail===gmail) {alert("Este correo ya existe");}
}
buttoncorreo.addEventListener("click",()=>{
    getCorreo();
})
const buttoneliminarcorreo = document.getElementById('buttoneliminarcorreo');
const detelegmail = () =>{
    localStorage.removeItem("datos",JSON.stringify({gmail}))
}
buttoneliminarcorreo.addEventListener("click",()=>{
    detelegmail();
})