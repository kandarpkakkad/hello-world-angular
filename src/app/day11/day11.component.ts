import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day11',
  template: `
    <h2>Hello {{ name }}</h2>
    <input [(ngModel)]="text" type="text" />
    <p>{{ text }}</p>
  `,
  styleUrls: ['./day11.component.css'],
})
export class Day11Component implements OnInit {
  public name = 'Kandarp';
  public text = '';

  constructor() {}

  ngOnInit(): void {}
}
