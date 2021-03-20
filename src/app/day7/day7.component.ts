import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day7',
  template: `
    <h2>Hello {{ name }}</h2>
    <h2 class="text-success">Explicit declaration</h2>
    <h2 [classList]="successClass">Using square bracket</h2>
    <h2 [class.text-danger]="hasError">Kandarp</h2>
    <h2 [ngClass]="messageClasses">Kandarp</h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class Day7Component implements OnInit {
  public name = 'Kandarp';
  public successClass = 'text-success';
  public dangerClass = 'text-danger';
  public specialClass = 'text-special';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  constructor() {}

  ngOnInit(): void {}
}
