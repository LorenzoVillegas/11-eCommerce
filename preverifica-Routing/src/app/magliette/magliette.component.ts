import { Component, Input } from '@angular/core';
import { Maglietta } from '../models/ecommerce.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-magliette',
  templateUrl: './magliette.component.html',
  styleUrls: ['./magliette.component.css']
})
export class MaglietteComponent {
  magliette: Maglietta[];

  constructor(private router: Router) {
    this.magliette = this.router.getCurrentNavigation().extras.state as Maglietta[];
  }
}
