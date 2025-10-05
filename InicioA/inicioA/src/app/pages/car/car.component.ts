import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
    selector:'app-car',
    templateUrl:'./car.component.html',
    styleUrl: './car.component.css'
})

export class CarComponent{
    brand = signal('Renault');
    year = signal(2020);
    student = signal('angie');
    getCarDescription=computed(() => `${this.brand()} - ${this.year()}`);
    capitalizedStudent= computed(()=> `${this.student().toLocaleUpperCase()}`);

    /*getCarDescription() {
        return `${this.brand} - ${this.year}`;
    }*/

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