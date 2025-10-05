interface Detalle{
    autor: string;
    anio: number;
}

interface ReproductorAudio{
    volumen: number;
    duracion: number;
    cancion: string;
    detalle: Detalle;
}

const reproductorAudio : ReproductorAudio ={
    volumen: 50,
    duracion: 10,
    cancion: "Cancion prueba",
    detalle: {
        autor: "Pepito",
        anio: 2025
    }
}

const cancion = reproductorAudio.cancion;
const autor = reproductorAudio.detalle.autor;

console.log(cancion),
console.log(autor);

// Desestructurador

const {cancion: nombreCancion, duracion} = reproductorAudio;
console.log(nombreCancion);
console.log(duracion);

//obtener nombre del autor

const {detalle} = reproductorAudio;
const {autor: nombreAutor} = detalle;
console.log(nombreAutor);

const {detalle:{ autor: nombreAutor2}} = reproductorAudio;
console.log(nombreAutor2);


// arrays

const frutas = ["peras", "manzanas", "Fresas"];
console.log("Frutas: "+ frutas[2]);
console.log("Frutas: "+ (frutas[3] || 'No se ha encontrado'));

//const [p1, p2, p3, p4 = 'No se encuentra'] = frutas;
const[,,p3] = frutas;


console.log(p3);

/////////////////////
interface Producto  {
    descripcion: string;
    precio: number;
}

const celular: Producto = {
    descripcion: "Samsung A1",
    precio: 100,
}
const computador: Producto = {
    descripcion: "lenovo",
    precio: 300,
}

const carrito: Producto[] =[celular, computador];
const impuesto: number = 0.19;
const propina: number = 0.1;

interface ImpuestosOption{
    impuesto:number;
    productos: Producto[];
    propina: number;
}

const options: ImpuestosOption={
    impuesto,
    productos: carrito,
    propina,
}

function calcularImpuesto(option: ImpuestosOption): [number, number, number]{
    const{impuesto, productos, propina}= option;
    let total=0;
    productos.forEach(({precio}) => {
        total+= precio;
    });
    return [total, total* impuesto, total*propina];
}

const resultadoCompra: number[] = calcularImpuesto(options);

console.log("Total: "+ resultadoCompra[0]);
console.log("Total impuesto: "+ resultadoCompra[1]);
console.log("Propina:"+resultadoCompra[2]);

/*
function calcularImpuesto(options: ImpuestosOption): number[]{
    let total=0;
    options.productos.forEach(producto => {
        total+= producto.precio;
    });
    return [total, total* options.impuesto];
}*/
/*
const resultadoCompra = calcularImpuesto({
    impuesto,
    productos: carrito,
});*/

/*
function calcularImpuesto(options: ImpuestosOption): number[]{
    let total=0;
    options.productos.forEach(({precio}) => {
        total+= precio;
    });
    return [total, total* options.impuesto];
}


//no es lo más ideal en casos de muchos argumentos
function calcularImpuesto(option: ImpuestosOption): [number, number]{
    const{impuesto, productos}= option;
    let total=0;
    productos.forEach(({precio}) => {
        total+= precio;
    });
    return [total, total* impuesto];
}
*/




//*
// 
/*
const [totalCompra, totalImpuestoCompra] = calcularImpuesto({
    impuesto,
    productos: carrito,
})

console.log("Total: "+ totalCompra);
console.log("Total impuesto: "+ totalImpuestoCompra);

*/









export{};