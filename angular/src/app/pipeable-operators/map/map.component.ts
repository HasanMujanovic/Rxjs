import { Component } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  randomUser$ = ajax<any>('https://random-data-api.com/api/v2/users').pipe(
    map((val) => val.response.first_name)
  );
  randomDrink$ = ajax<any>('https://random-data-api.com/api/v2/beers').pipe(
    map((val) => val.response.style)
  );
  randomAppliance$ = ajax<any>(
    'https://random-data-api.com/api/v2/appliances'
  ).pipe(map((val) => val.response.brand));
  constructor() {
    forkJoin([
      this.randomDrink$,
      this.randomAppliance$,
      this.randomUser$,
    ]).subscribe(([drinkRes, applianceRes, userRes]) =>
      console.log(
        `drink Response: ${drinkRes}, appliance Response: ${applianceRes}, user Response: ${userRes}`
      )
    );
  }
}
