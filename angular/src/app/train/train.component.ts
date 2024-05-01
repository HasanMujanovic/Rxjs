import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css'],
})
export class TrainComponent implements OnInit {
  observable$ = new Observable<string>((subscriber) => {
    console.log('Observable executed');
    subscriber.next('Hasan');
    setTimeout(() => subscriber.next('Amar'), 2000);
    setTimeout(() => subscriber.next('Dzenis'), 4000);
  });
  // observer = {
  //   next: (value: string) => console.log(value),
  // };
  subscritpion = this.observable$.subscribe({
    next: (value) => console.log(value),
  });
  constructor() {
    this.observable$.subscribe({
      next: (value) => console.log(value, 'SubsOne'),
    });
    setTimeout(() => {
      console.log('Second,One');
      this.observable$.subscribe({
        next: (value) => console.log(value, 'SubsTwo'),
      });
    }, 1000);
  }

  ngOnInit(): void {}
}
