import { AfterViewInit, Component } from '@angular/core';
import {
  EMPTY,
  Observable,
  catchError,
  concatMap,
  fromEvent,
  map,
  of,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
})
export class ExamplesComponent implements AfterViewInit {
  // source$ = new Observable((subscriber) => {
  //   setTimeout(() => {
  //     subscriber.next('A');
  //   }, 2000);
  //   setTimeout(() => {
  //     subscriber.next('B');
  //   }, 5000);
  // });

  // constructor() {
  //   console.log('App started');
  //   this.source$
  //     .pipe(concatMap((val) => of(1, 2)))
  //     .subscribe((val) => console.log(val));
  // }
  ngAfterViewInit(): void {
    const input = document.getElementById('text') as HTMLInputElement;
    const btn = document.getElementById('btn');
    fromEvent(btn, 'click')
      .pipe(
        map(() => input.value),
        concatMap((val) =>
          ajax(`https://random-data-api.com/api/v2/${val}`).pipe(
            catchError(() => EMPTY)
          )
        )
      )
      .subscribe({
        next: (val) => console.log(val),
        error: (err) => console.log(err),
        complete: () => console.log('Completed'),
      });
  }
}
