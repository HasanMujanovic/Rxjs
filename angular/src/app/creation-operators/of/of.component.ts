import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css'],
})
export class OfComponent {
  names$ = new Observable<string>((subscriber) => {
    subscriber.next('value1');
    subscriber.next('value2');
    subscriber.next('value3');
    subscriber.complete();
  });
  constructor() {
    // this.ourOwnFunc('value1', 'value2', 'value3').subscribe({
    //   next: (val) => console.log(val),
    //   complete: () => console.log('Completed'),
    // });
    of('value1', 'value2', 'value3').subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Completed'),
    });
    // this.names$.subscribe({
    //   next: (val) => console.log(val),
    //   complete: () => console.log('Completed'),
    // });
  }

  ourOwnOf(...args: string[]): Observable<string> {
    return new Observable<string>((subscriber) => {
      for (let i = 0; i < args.length; i++) {
        subscriber.next(args[i]);
      }
      subscriber.complete();
    });
  }
}
