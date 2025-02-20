import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Country {
  name: string;
  capital: string;
  population: number;
  flag: string;
  region: string;
}

@Component({
  selector: 'app-countries',
  imports: [NavbarComponent, CardComponent,CommonModule,FormsModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.scss'
})
export class CountriesComponent implements OnInit {
  countries: Country[] = [];
  filteredCountries: Country[] = [];
  selectedRegion: string = '';
  regions: string[] = ["Africa", "America", "Asia", "Europe", "Oceania"];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Country[]>('./data.json').subscribe((data) => {
      this.countries = data;
      this.filteredCountries = data; 
    });
  }

  filterByRegion() {
    if (this.selectedRegion) {
      this.filteredCountries = this.countries.filter(country => country.region === this.selectedRegion);
    } else {
      this.filteredCountries = [...this.countries];
    }
  }
}