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
  ability: any;
  abilityFr?: string;
  description?: string;
  languages?: any[] = [];
  selectedLanguage: string = 'fr';

  readonly ELEMENTS_PER_PAGE = 10;

  ngOnInit() {
    this.getPokemons();
    this.getLanguages();
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
    this.ability = undefined;
    this.abilityFr = undefined;
    this.description = undefined;
    this.service.getPokemon(url).subscribe(result => {
      this.selectedPokemon = result;
    })
  }

  getAbility(url: string) {
    this.service.getPokemon(url).subscribe(result => {
      this.ability = result;
      this.selectLanguageAbility();
    })
  }

  selectLanguageAbility() {
    this.abilityFr = this.ability.names.find((n: any) => n.language.name === this.selectedLanguage).name;
    this.description = this.ability.flavor_text_entries.find((f: any) => f.language.name === this.selectedLanguage).flavor_text;
  }

  getLanguages() {
    this.service.getLanguages().subscribe(result => {
      this.languages = result.results;
    });
  }
}
