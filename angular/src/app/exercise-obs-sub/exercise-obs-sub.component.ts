import { Component } from '@angular/core';
import { Observable, count } from 'rxjs';

@Component({
  selector: 'app-exercise-obs-sub',
  templateUrl: './exercise-obs-sub.component.html',
  styleUrls: ['./exercise-obs-sub.component.css'],
})
export class ExerciseObsSubComponent {
  // observable$ = new Observable<any>((subscriber) => {
  //   console.log('Observable executed');
  //   subscriber.next('value1');
  //   subscriber.next('value2');
  //   setTimeout(() => {
  //     subscriber.error(new Error('Failure'));
  //   }, 2000);
  //   setTimeout(() => {
  //     subscriber.next('value3');
  //   }, 4000);

  //   return () => {
  //     console.log('Teardown');
  //     subscriber.complete();
  //   };
  // });

  // constructor() {
  //   console.log('Before subscribe');
  //   this.observable$.subscribe({
  //     next: (value) => console.log(value),
  //     error: (err) => console.log(err.message),
  //     complete: () => console.log('Completed'),
  //   });
  //   console.log('After subscription');
  // }

  observable2$ = new Observable<number>((subscriber) => {
    let counter = 1;
    const intervalId = setInterval(() => {
      console.log('Emitted', counter);
      subscriber.next(counter++);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  });
  subscription = this.observable2$.subscribe((value) => console.log(value));
  constructor() {
    console.log('Start subscription');
    this.subscription;
    setTimeout(() => {
      console.log('unsubscribe');
      this.subscription.unsubscribe();
    }, 7000);
  }
}
