import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day13',
  template: `
    <h2>Hello {{ name }}</h2>
    <div [ngSwitch]="color.toLowerCase()">
      <h2 *ngSwitchCase="'red'">Red</h2>
      <h2 *ngSwitchCase="'yellow'">Yellow</h2>
      <h2 *ngSwitchCase="'green'">Green</h2>
      <h2 *ngSwitchCase="'blue'">Blue</h2>
      <h2 *ngSwitchDefault>None</h2>
    </div>
  `,
  styleUrls: ['./day13.component.css'],
})
export class Day13Component implements OnInit {
  public name = 'Kandarp';
  public color = 'green';

  constructor() {}

  ngOnInit(): void {}
}
