export interface Pasajero{
    nombre: string;
    hijos?:string[];
}

const pasajero1: Pasajero= {
    nombre: 'Pepito',
    hijos: ['Janeiro', 'Fevereiro']
}

const pasajero2: Pasajero= {
    nombre: 'Perez',
}

const mostrarHijos = (pasajero: Pasajero)=>{
    const cantidadHijos= pasajero.hijos?.length ?? 0;
    console.log(cantidadHijos);

}
mostrarHijos(pasajero1);
mostrarHijos(pasajero2)

//
//const valorPrueba = "" ?? "10";

//Ejercicio 9
/*Ejercicio: Biblioteca Digital con Encadenamiento Opcional
Crea un sistema que modele libros usando TypeScript y aprovecha 
el encadenamiento opcional (?.) y el operador nullish coalescing (??).

Crea al menos tres libros:
Uno con todos los datos completos.
Uno sin autor.
Uno sin año de publicación.*/

export interface Libro{
    titulo: string
    autor?: { nombre?: string; pais?: string }
    anioPublicacion?: number
}
const libro1 : Libro ={
    titulo: "La odisea",
    autor:{
        nombre:'Homero',
        pais:'Grecia'},
    anioPublicacion: 1800
}
const libro2: Libro={
    titulo: "principito",
    anioPublicacion:1945
}
const libro3: Libro={
    titulo: "Metamorfosis",
    autor: {
        nombre:"Juan",
        pais:"EE.UU."
    }
}
const mostrarLibro = (libro: Libro)=>{
    const t= libro.titulo;
    const a= libro.autor?.nombre ?? "Autor desconocido";
    const p= libro.autor?.pais ?? "País desconocido";
    const an= libro.anioPublicacion ?? "Año no disponible";
    console.log("Título: "+t+ " Nombre autor: "+a+" País autor: "+p+" Año de publicacion"+ an);
}

mostrarLibro(libro1);
mostrarLibro(libro2);
mostrarLibro(libro3);



/*2. Crea una función llamada mostrarLibro que reciba un objeto Libro y muestre en consola:
El título (obligatorio).
El nombre del autor (si no está definido, mostrar "Autor desconocido").
El país del autor (si no está definido, mostrar "País desconocido").
El año de publicación (si no está definido, mostrar "Año no disponible").
Usa encadenamiento opcional (?.) para acceder a autor?.nombre y autor?.pais. 
Usa ?? para dar valores por defecto.*/