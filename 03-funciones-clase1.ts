
function suma(a: number, b: number): number{
    return a+b;
}

const result = suma(3,2);


const sumar2 =(n1:number, n2:number):number => {
    return n1 +n2;
}

const resultado:number = sumar2(3,2);
console.log({result, resultado})

function multiplicar (primerNumero:number, segundoNumero?:number, base= 4): number{
    return primerNumero * base;
}
const res: number = multiplicar(7,2,1);
console.log({res});
 
 /////////////////////

interface PersonajeInterface{
    nombre:string;
    vida:number;
    mostrarDetalle: () => void;
}

const porcentajeVida= (personaje:PersonajeInterface, vida:number) => {
    personaje.vida += vida;

}
 const persona1: PersonajeInterface={
    nombre: 'Pepito',
    vida:20,
    mostrarDetalle(){
        console.log(`Nombre -> ${this.nombre} Vida ${this.vida}`);
    }
 }

console.log(persona1);

porcentajeVida(persona1, 30);

console.log(persona1)

persona1.mostrarDetalle();


//ejercicio implementar la interfaz para lo siguiente:


interface Usuario{
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    roles: string[];
    direccion: DireccionInterface;
    saludar: () => string;
    actualizarEmail: (nuevoEmail:string) => void;
}

interface DireccionInterface{
    ciudad: string,
    pais: string
}

const usuario1: Usuario = {
    id:1,
    nombre: "Ana Pérez",
    email: "ana@example.com",
    activo: true,
    roles: ["admin", "editor"],
    direccion: {
        ciudad: "Bogotá",
        pais: "Colombia"
    },
    saludar (){
        return `Hola, mi nombre es ${this.nombre}`;
    },
    actualizarEmail(nuevoEmail: string){
        this.email = nuevoEmail;
    }
}

console.log(usuario1);

export{};
