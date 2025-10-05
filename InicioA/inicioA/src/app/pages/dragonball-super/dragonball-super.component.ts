import { Component, effect, inject } from "@angular/core";

import { CharacterList } from '../../components/dragonball/character-list/character-list'
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from "../../services/dragonballService";

interface Character{
    id:number;
    name:string;
    power: number;
}
@Component({
    selector: 'app-dragonballSuper',
    imports: [ CharacterList, CharacterAdd],
    templateUrl:'./dragonball-super.component.html',
    styleUrl: './dragonball-super.component.css'
})

export class DragonballSuperComponent{
    public dragonballService = inject(DragonballService);    
    /*
    prueba(){
        effect(()=>{
            console.log(`Prueba: ${this.count()}`);
        })
    }*/

}
