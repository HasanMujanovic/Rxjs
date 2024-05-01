import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exercise-obs-sub',
  templateUrl: './exercise-obs-sub.component.html',
  styleUrls: ['./exercise-obs-sub.component.css'],
})
export class ExerciseObsSubComponent {
  observable$ = new Observable<any>((subscriber) => {
    console.log('Observable executed');
    subscriber.next('value1');
    subscriber.next('value2');
    setTimeout(() => {
      subscriber.next('value3');
      subscriber.complete();
    }, 2000);

    return () => {
      console.log('Teardown');
    };
  });

  constructor() {
    console.log('Before subscribe');
    this.observable$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed'),
    });
    console.log('After subscription');
  }
}
