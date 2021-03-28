import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16',
  template: `
    <h2>Hello {{ name }}</h2>
    <h2>Hello {{ name | lowercase }}</h2>
    <h2>Hello {{ name | uppercase }}</h2>
    <h2>{{ message | titlecase }}</h2>
    <h2>Hello {{ name | slice: 3 }}</h2>
    <h2>Hello {{ name | slice: 3:5 }}</h2>
    <h2>{{ person | json }}</h2>

    <h2>{{ 5.678 | number: '1.2-3' }}</h2>
    <h2>{{ 5.678 | number: '3.4-5' }}</h2>
    <h2>{{ 5.678 | number: '3.1-2' }}</h2>

    <h2>{{ 0.25 | percent }}</h2>

    <h2>{{ 0.25 | currency }}</h2>
    <h2>{{ 25 | currency: 'INR' }}</h2>
    <h2>{{ 25 | currency: 'INR ':'code' }}</h2>

    <h2>{{ date }}</h2>
    <h2>{{ date | date: 'short' }}</h2>
    <h2>{{ date | date: 'shortDate' }}</h2>
    <h2>{{ date | date: 'shortTime' }}</h2>
  `,
  styleUrls: ['./day16.component.css'],
})
export class Day16Component implements OnInit {
  public name = 'Kandarp';
  public message = 'This is Kandarp.';
  public person = {
    firstName: 'Kandarp',
    lastName: 'Kakkad',
    age: 22,
  };
  public date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
