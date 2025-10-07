import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsService } from '../../services/starwars.services';

@Component({
  selector: 'app-people-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-page.html',
  styles: ``
})
export default class PeoplePage {
  personajes = signal<any[]>([]); 

  private starWarsService = inject(StarWarsService); 

  listarPersonajes() {
    this.starWarsService.getPersonajes().subscribe(data => {
      this.personajes.set(data.results);
    });
  }

  listarPersonajesMasculinos() {
    this.starWarsService.getPersonajes().subscribe(data => {
      const filtrados = data.results.filter((p: any) => p.gender === 'male');
      this.personajes.set(filtrados);
    });
  }

  listarPersonajesFemeninos() {
    this.starWarsService.getPersonajes().subscribe(data => {
      const filtrados = data.results.filter((p: any) => p.gender === 'female');
      this.personajes.set(filtrados);
    });
  }
  reset() {
    this.personajes.set([]);
  }
}
