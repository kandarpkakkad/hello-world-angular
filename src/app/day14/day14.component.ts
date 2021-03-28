import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day14',
  template: `
    <div *ngFor="let color of colors; index as i">
      <h2>{{ i + 1 }} - {{ color.toLocaleUpperCase() }}</h2>
    </div>
    <br />
    <div *ngFor="let color of colors; first as f">
      <h2>{{ f }} - {{ color.toLocaleUpperCase() }}</h2>
    </div>
    <br />
    <div *ngFor="let color of colors; last as l">
      <h2>{{ l }} - {{ color.toLocaleUpperCase() }}</h2>
    </div>
    <br />
    <div *ngFor="let color of colors; odd as o">
      <h2>{{ o }} - {{ color.toLocaleUpperCase() }}</h2>
    </div>
    <br />
    <div *ngFor="let color of colors; even as e">
      <h2>{{ e }} - {{ color.toLocaleUpperCase() }}</h2>
    </div>
  `,
  styleUrls: ['./day14.component.css'],
})
export class Day14Component implements OnInit {
  public name = 'Kandarp';
  public colors = ['blue', 'red', 'green', 'yellow'];

  constructor() {}

  ngOnInit(): void {}
}
