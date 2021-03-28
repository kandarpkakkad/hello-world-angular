import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day12',
  template: `
    <h2>Hello {{ name }}</h2>
    <h2 *ngIf="false">Show if true</h2>
    <h2 *ngIf="displayName">Show if true</h2>
    <h2 *ngIf="displayName; else elseBlock">Show if true</h2>
    <ng-template #elseBlock>
      <h2>Show if false</h2>
    </ng-template>
    <ng-component *ngIf="displayName; then thenTemplate; else elseTemplate">
    </ng-component>
    <ng-template #thenTemplate> <h2>Hello True</h2> </ng-template>
    <ng-template #elseTemplate> <h2>Hello False</h2> </ng-template>
    <h2 [ngIf]="displayName">[True]</h2>
    <ng-template [ngIf]="displayName" [ngIfElse]="elseBlock3">
      [True]
    </ng-template>
    <ng-template #elseBlock3> <h2>Hello False</h2> </ng-template>
  `,
  styleUrls: ['./day12.component.css'],
})
export class Day12Component implements OnInit {
  public name = 'Kandarp';
  public displayName = true;

  constructor() {}

  ngOnInit(): void {}
}
