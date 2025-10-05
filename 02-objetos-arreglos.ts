let caracteristicas: string[] =["Alto", "inteligente"];

interface PersonaInterface{
    nombre:string;
    edad: number;
    caracteristicas?:String[];

}

const persona: PersonaInterface ={
    nombre:'pepe',
    edad: 10
}
console.log(persona);
export{};