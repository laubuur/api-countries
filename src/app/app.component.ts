import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CountryService } from './services/country.service';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'country';

  service = inject(CountryService);

  countries: any[] = [];
  countries2$ = this.service.getAllCountries();

  ngOnInit() {
    this.service.getAllCountries().subscribe((response) => {
      this.countries = response;
    });
  }
}
