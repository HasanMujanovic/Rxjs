import { Component } from '@angular/core';
import { EMPTY, Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css'],
})
export class CatchErrorComponent {
  faillingReq$ = new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.error(new Error('Timeout'));
    }, 3000);
  });
  constructor() {
    console.log('App started');
    // this.faillingReq$
    //   .pipe(catchError((error) => of('Fallback value')))
    //   .subscribe((val) => console.log(val));
    this.faillingReq$.pipe(catchError((error) => EMPTY)).subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('Completed'),
    });
  }
}
