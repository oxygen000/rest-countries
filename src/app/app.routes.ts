import { provideRouter, Routes } from '@angular/router';
import { CountriesComponent } from './pages/countries/countries.component';
import { CountriesDataComponent } from './pages/countries-data/countries-data.component';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
    { path: '', component: CountriesComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },  // إعادة التوجيه التلقائي إلى /home
    { path: 'countries/id', component: CountriesDataComponent },
];

export const appProviders = [
    provideRouter(routes),
    provideHttpClient()
  ];