import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl:'./counter-page.component.html',
    styleUrl: './counter-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class CounterPageComponent{
    counter:number = 0;
    counterSignal= signal(0)


    
    constructor(){
        setInterval(()=>{
            this.counter += 1;
            //this.counterSignal.update((currentValue: number) => currentValue+1);
            console.log("Se actualizo");
        },(1000));
    }

    add(value: number){
        this.counter += value;
        this.counterSignal.update((currentValue:number)=>currentValue+value)
    }
    restar(value: number){
        this.counter -= value;
        this.counterSignal.update((currentValue:number)=>currentValue-value)
    }
    reiniciar(){
        this.counter = 0;
        this.counterSignal.set(0)
    }

}
//crear dos botones adicionales
//restar, reiniciar 
//que no sea dentro del temple que sea dentro del templateUrl
//creen un archivo intenten respetar el hmtl