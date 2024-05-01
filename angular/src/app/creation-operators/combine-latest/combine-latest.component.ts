import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css'],
})
export class CombineLatestComponent implements OnInit {
  tempInput: HTMLInputElement;
  convertInput: HTMLSelectElement;
  resultTxt: HTMLParagraphElement;

  constructor() {}

  ngOnInit() {
    this.tempInput = document.getElementById('temp') as HTMLInputElement;
    this.convertInput = document.getElementById('convert') as HTMLSelectElement;
    this.resultTxt = document.getElementById('res') as HTMLParagraphElement;

    const tempInpEvent$ = fromEvent(this.tempInput, 'input');

    const convertInpEvent$ = fromEvent(this.convertInput, 'input');

    combineLatest([tempInpEvent$, convertInpEvent$]).subscribe(
      ([tempInp, covnertInp]) => {
        let tempterature = +tempInp.target['value'];
        let conversion = covnertInp.target['value'];
        let result: number;
        if (conversion == 'C -> F') {
          result = (tempterature - 32) * (5 / 9);
        } else if (conversion == 'F -> C') {
          result = tempterature * (9 / 5) + 32;
        }
        this.resultTxt.innerText = String(result);
      }
    );
  }
}
