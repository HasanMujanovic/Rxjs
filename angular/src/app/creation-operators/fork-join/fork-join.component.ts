import { Component } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css'],
})
export class ForkJoinComponent {
  // randomUser$ = ajax<any>('https://random-data-api.com/api/v2/users');
  // randomDrink$ = ajax<any>('https://random-data-api.com/api/v2/beers');
  // randomAppliance$ = ajax<any>('https://random-data-api.com/api/v2/appliances');
  // constructor() {
  //   // this.randomUser$.subscribe((res) => console.log(res.response.first_name));
  //   // this.randomDrink$.subscribe((res) => console.log(res.response.style));
  //   // this.randomNation$.subscribe((res) => console.log(res.response.brand));
  //   forkJoin([
  //     this.randomDrink$,
  //     this.randomAppliance$,
  //     this.randomUser$,
  //   ]).subscribe(([drinkRes, applianceRes, userRes]) =>
  //     console.log(
  //       `drink Response: ${drinkRes.response.style}, appliance Response: ${applianceRes.response.brand}, user Response: ${userRes.response.first_name}`
  //     )
  //   );
  // }
  ////// with errors
  a$ = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next('A');
      subscriber.complete();
    }, 5000);
    return () => {
      console.log('A Teardown');
    };
  });
  b$ = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.error('Failure');
    }, 3000);
    return () => {
      console.log('B Teardown');
    };
  });

  constructor() {
    forkJoin([this.a$, this.b$]).subscribe({
      next: (val) => console.log(val),
      error: (err) => console.log('Error', err),
      complete: () => console.log('Completed'),
    });
  }
}
