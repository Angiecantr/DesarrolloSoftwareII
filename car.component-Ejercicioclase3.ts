import { Component, signal } from "@angular/core";


@Component({
    templateUrl:'./car.component.html'
})

export class CarComponent{
    brand = signal('Renault');
    year = signal(2020);
    student = signal('angie')

    getCarDescription() {
        return `${this.brand} - ${this.year}`;
    }

    changeCar(){
        this.brand.set('kia');
        this.year.set(2021);
    }
     
    resetForm(){
        this.brand.set('Renault');
        this.year.set(2020);
    }

    changeYear(){
        this.year.set(2025);
    }



}
