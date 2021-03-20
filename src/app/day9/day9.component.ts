import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day9',
  template: `
    <h2>Hello {{ name }}</h2>
    <button (click)="onClick()">Click Me</button>
    <h4>{{ greeting }}</h4>
    <button (click)="onClick2($event)">Click Me</button>
    <h4>{{ greeting2 }}</h4>
    <button (click)="greeting3 = 'Button 3 clicked'">Click Me</button>
    <h4>{{ greeting3 }}</h4>
  `,
  styleUrls: ['./day9.component.css'],
})
export class Day9Component implements OnInit {
  public name = 'Kandarp';
  public greeting = '';
  public greeting2 = '';
  public greeting3 = '';

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    console.log('Clicked');
    this.greeting = 'Button clicked';
  }

  onClick2(event: any): void {
    console.log(event);
    this.greeting2 = event.type + 'ed';
  }
}
