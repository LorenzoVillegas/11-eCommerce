import { Component, Input } from '@angular/core';
import { Scarpa } from '../models/ecommerce.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scarpe',
  templateUrl: './scarpe.component.html',
  styleUrls: ['./scarpe.component.css']
})
export class ScarpeComponent {
  scarpe: Scarpa[];

  constructor(private router: Router) {
    this.scarpe = this.router.getCurrentNavigation().extras.state as Scarpa[];
  }
}
