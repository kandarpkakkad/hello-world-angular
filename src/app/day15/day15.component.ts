import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day15',
  template: `
    <h2>Hello {{ parentData }}</h2>
    <h2>Hello {{ name }}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./day15.component.css'],
})
export class Day15Component implements OnInit {
  @Input()
  public parentData!: string;
  // tslint:disable-next-line: no-input-rename
  @Input('parentData')
  public name!: string;
  @Output()
  public childEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  fireEvent(): void {
    this.childEvent.emit('Hello from Day15.');
  }
}
