import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day6',
  template: `
    <h2>Hello {{ name }}</h2>
    <input [id]="inputId" type="text" value="Kandarp">
    <br>
    <input [disabled]="isDisabled" id="{{ inputId }}" type="text" value="Kandarp">
    <br>
    <input bind-disabled="isDisabled" id="{{ inputId }}" type="text" value="Kandarp">
  `,
  styleUrls: ['./day6.component.css']
})
export class Day6Component implements OnInit {

  public name = 'Kandarp';
  public inputId = 'inputId';
  public isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

}
