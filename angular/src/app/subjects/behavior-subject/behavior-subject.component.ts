import { AfterViewInit, Component } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css'],
})
export class BehaviorSubjectComponent implements AfterViewInit {
  behSubj$ = new BehaviorSubject<boolean>(false);
  ngAfterViewInit(): void {
    const inn = document.getElementById('in');
    const out = document.getElementById('out');
    const print = document.getElementById('print');

    fromEvent(inn, 'click').subscribe(() => this.behSubj$.next(true));
    fromEvent(out, 'click').subscribe(() => this.behSubj$.next(false));

    fromEvent(print, 'click').subscribe(() => {
      console.log('User is logged in: ', this.behSubj$.value);
    });
  }
}
