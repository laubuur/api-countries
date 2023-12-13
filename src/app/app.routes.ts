import { Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ErrorComponent } from './components/error/error.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

export const routes: Routes = [
    {
        path: 'country',
        component: SearchComponent
    },
    {
        path: 'pokemon',
        component: PokemonComponent
    },
    {
        path: '404',
        component: ErrorComponent,
    },
    {
        path: '**',
        redirectTo: '404'
    }
];
