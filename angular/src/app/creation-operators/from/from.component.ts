import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
})
export class FromComponent {
  somePromise = new Promise((resolve, reject) => {
    // resolve('Resolved');
    reject('Rejected');
  });
  observableFromPromise$ = from(this.somePromise);
  constructor() {
    // from(['Hasan', 'Amin', 'Amir']).subscribe({
    //   next: (val) => console.log(val),
    //   complete: () => console.log('Completed'),
    // });
    this.observableFromPromise$.subscribe({
      next: (val) => console.log(val),
      error: (err) => console.log('Error: ', err),
      complete: () => console.log('Completed'),
    });
  }
}
