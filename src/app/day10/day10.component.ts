import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day10',
  template: `
    <h2>Hello {{ name }}</h2>
    <input #inputText type="text" />
    <button (click)="logMessage(inputText.value)">Log</button>
  `,
  styleUrls: ['./day10.component.css'],
})
export class Day10Component implements OnInit {
  public name = 'Kandarp';

  constructor() {}

  ngOnInit(): void {}

  logMessage(inputValue: string): void {
    console.log(inputValue);
  }
}
