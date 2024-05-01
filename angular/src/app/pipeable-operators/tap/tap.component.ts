import { Component } from '@angular/core';
import { filter, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent {
  constructor() {
    of(1, 2, 3, 4, 5, 6)
      .pipe(
        filter((val) => val % 2 != 0),
        tap((val) => console.log('Spy:', val)),
        map((val) => val * 2)
      )
      .subscribe((val) => console.log('Value: ', val));
  }
}
