import { Component } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  numbers = of(1, 2, 3, 4, 5, 6);
  filtered$ = this.numbers.pipe(filter((num) => num % 2 == 0));

  constructor() {
    this.filtered$.subscribe((val) => console.log(val));
  }
}
