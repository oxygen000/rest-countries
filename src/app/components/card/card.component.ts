import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Country {
  name: string;
  capital: string;
  population: number;
  flag: string;
  region: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() countries: Country[] = []; 
}