import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  searchText = '';
  service = inject(CountryService);

  countries: any[] = [];
  voisins: any[] = [];

  countries$?: Observable<any>;
  voisins$?: Observable<any>;

  search() {
    /* Methode 1 */
    this.countries$ = this.service.searchCountry(this.searchText);

    /* Méthode 2 */
    this.service.searchCountry(this.searchText).subscribe(response => {
      this.countries = response;
    })
  }

  searchVoisins(codes: string[]) {
    this.service.getCountriesByCode(codes).subscribe(response => {
      this.voisins = response;
    })
  }
}
