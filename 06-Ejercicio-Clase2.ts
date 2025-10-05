
interface Comida {
    nombre: string;
    calorias: number;
    esVegana: boolean;
}

const pizza : Comida = {
    nombre: "pizza",
    calorias: 600,
    esVegana: false
}
const ensalada : Comida = {
    nombre: "ensalada",
    calorias: 200,
    esVegana: true
}
const hamburguesa : Comida = {
    nombre: "hamburguesa",
        calorias: 800,
        esVegana: false
}

class ComidaService{

    public mostrarInfo(comida: Comida){
        const{nombre, calorias, esVegana} = comida;
        console.log("Nombre: "+nombre+", Calorías: "+calorias+", ¿Vegana?: "+esVegana);
        };
    

    public modificarCalorias(comida: Comida, nuevasCalorias: number): Comida{
        console.log("Modificando comida...");
        comida.calorias= nuevasCalorias;
        return comida;
    }
}

    //mostrarInfo(comidas);
    //modificarCalorias(comidas[1], 300);



class NotificadorComida{
    private comidaService: ComidaService;
    constructor(comidaService: ComidaService){
        this.comidaService=comidaService

    }
    
    public notificar(comida: Comida){
        console.log("Notificando comida...");
        this.comidaService.mostrarInfo(comida);
    }
}

const servicio = new ComidaService();
const servicio2= new NotificadorComida(servicio);

servicio2.notificar(pizza);
servicio.modificarCalorias(pizza, 50);



export{};