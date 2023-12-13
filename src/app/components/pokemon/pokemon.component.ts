import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

  service = inject(PokemonService);
  pokemons: any[] = [];
  selectedPokemon: any = undefined;
  count = 0;
  page = 1;
  totalPage = 0;
  readonly ELEMENTS_PER_PAGE = 10;

  ngOnInit() {
    this.getPokemons();
  }

  nextPage() {
    if (this.page < this.totalPage) {
      this.page += 1;
      this.getPokemons();
    }
  }

  previousPage() {
    if (this.page > 1) {
      this.page -= 1;
      this.getPokemons();
    }
  }

  private getPokemons() {
    this.service.getPokemons(this.ELEMENTS_PER_PAGE, this.page).subscribe(result => {
      this.count = result.count;
      this.pokemons = result.results;

      this.totalPage = Math.ceil(result.count / this.ELEMENTS_PER_PAGE);
    });
  }

  getDetail(url: string) {
    this.service.getPokemon(url).subscribe(result => {
      this.selectedPokemon = result;
    })
  }
}
