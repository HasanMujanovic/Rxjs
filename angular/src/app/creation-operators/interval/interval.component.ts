import { Component } from '@angular/core';
import { Observable, interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent {
  interval$ = new Observable<number>((subscriber) => {
    let counter = 0;
    const timeoutId = setInterval(() => {
      subscriber.next(counter++);
    }, 1000);

    return () => {
      clearInterval(timeoutId);
    };
  });
  subscription = this.interval$.subscribe({
    next: (val) => console.log(val),
  });
  // subscription2 = interval(1000).subscribe({
  //   next: (val) => console.log(val),
  //   complete: () => console.log('Completed'),
  // });

  constructor() {
    setTimeout(() => {
      this.subscription.unsubscribe();
      console.log('Unsub');
    }, 4000);
    // this.timer$.subscribe({
    //   next: (val) => console.log(val),
    //   complete: () => console.log('Completed'),
    // });
  }
}
