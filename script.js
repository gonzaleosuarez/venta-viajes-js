import {barcelona, roma, paris, londres} from "./ciudades.js";

//Obtener los elementos del DOM
let enlaces = document.querySelectorAll("li a");
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

//Agregar un evento click a cada enlace 
enlaces.forEach(function(enlace){
    enlace.addEventListener("click", function(){
        //Remover activo
        enlaces.forEach(function(enlace){
            enlace.classList.remove("active");
        })

        //agregar la clase active al enlace actual
        this.classList.add("active");

        //obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent);

        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;

    })

    //agregar active al que corresponda

    //traer la informacion del objeto correspondiente a la eleccion

    //mostrar contenido en el DOM
})

//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
        let contenido = {
            'Barcelona': barcelona,
            'Roma': roma,
            'París': paris,
            'Londres': londres
        };
        return contenido[enlace];
}