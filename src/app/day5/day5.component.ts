import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day5',
  template: `
    <h2>Hello {{ name }}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ "Welcome " + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    <h2><a href="{{ url }}">{{ url }}</a><h2>
  `,
  styleUrls: ['./day5.component.css']
})
export class Day5Component implements OnInit {

  public name = 'Kandarp';
  public url = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(): string {
    return 'Hello ' + this.name;
  }

}
