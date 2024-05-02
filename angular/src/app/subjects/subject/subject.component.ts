import { AfterViewInit, Component } from '@angular/core';
import { Subject, from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements AfterViewInit {
  value$ = new Subject<string>();
  ngAfterViewInit(): void {
    const input = document.getElementById('text') as HTMLInputElement;
    const emit = document.getElementById('emit');
    const sub = document.getElementById('sub');

    fromEvent(emit, 'click').subscribe(() => this.value$.next(input.value));

    fromEvent(sub, 'click').subscribe(() => {
      console.log('New subs');
      this.value$.subscribe((val) => console.log(val));
    });
  }
}
