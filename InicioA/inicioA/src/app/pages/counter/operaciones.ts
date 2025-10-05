import { Component } from "@angular/core";

@Component({


    template: `
    <h1>Componente - Contador </h1>
    <h2>Valor: {{ counter }}</h2>
    <button (click)="add(1)"> Aumentar 1</button>
    <button (click)="restar(1)"> Restar 1</button>
    <button (click)="reiniciar()"> Reiniciar</button>`

})
export class CounterPageComponent{
    counter:number =0;

    add(value: number){
        this.counter += value;
    }
    restar(value: number){
        this.counter -= value;
    }
    reiniciar(){
        this.counter = 0;
    }

}