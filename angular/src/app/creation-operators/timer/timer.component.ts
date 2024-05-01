import { Component } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent {
  timer$ = new Observable<number>((subscriber) => {
    const timeoutId = setTimeout(() => {
      console.log('Timeout');
      subscriber.next(0);
      subscriber.complete();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  });
  subscription = this.timer$.subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Completed'),
  });
  subscription2 = timer(2000).subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('Completed'),
  });
  constructor() {
    setTimeout(() => {
      this.subscription.unsubscribe();
      console.log('Unsub');
    }, 1000);

    // this.timer$.subscribe({
    //   next: (val) => console.log(val),
    //   complete: () => console.log('Completed'),
    // });
  }
}
