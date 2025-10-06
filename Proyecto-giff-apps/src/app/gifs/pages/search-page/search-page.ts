
import { Component, signal } from '@angular/core';
import { GifsService } from '../../services/gifs.services';
import { Gif } from '../../interfaces/gif.interface';
import { GifList } from '../../components/gif-list/gif-list';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-search-page',
  standalone: true, 
  imports: [FormsModule, GifList],
  templateUrl: './search-page.html',
  styles: ``,
})
export default class SearchPageComponent {
  query = '';
  gifs = signal<Gif[]>([]);

  constructor(private gifsService: GifsService) {}

  searchGifs() {
    this.gifsService.searchGifs(this.query).subscribe((gifs) => {
      this.gifs.set(gifs);
    });
  }
}


