import { AfterViewInit, Component, OnInit } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css'],
})
export class DebounceTimeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const slider = document.getElementById('slide');

    fromEvent(slider, 'input')
      .pipe(
        debounceTime(2000),
        map((event) => event.target['value'])
      )
      .subscribe((val) => console.log(val));
  }
}
