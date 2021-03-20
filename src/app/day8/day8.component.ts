import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day8',
  template: `
    <h2>Hello {{ name }}</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Hello {{ name }}</h2>
    <h2 [style.color]="highlightColor">Hello {{ name }}</h2>
    <h2 [ngStyle]="titleStyles">Hello {{ name }}</h2>
  `,
  styleUrls: [],
})
export class Day8Component implements OnInit {
  public name = 'Kandarp';
  public hasError = true;
  public highlightColor = 'orange';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };

  constructor() {}

  ngOnInit(): void {}
}
