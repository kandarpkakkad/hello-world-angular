import { Component, OnInit } from '@angular/core';
import { PeopleDetailsService } from '../people-details.service';

@Component({
  selector: 'app-day19',
  template: `<h1>
    <div *ngFor="let person of people">
      <h2>{{ person.name }} - {{ person.age }}</h2>
    </div>
    <br />
    <h1></h1>
  </h1>`,
  styleUrls: ['./day19.component.css'],
})
export class Day19Component implements OnInit {
  public people: Array<any> = [];

  // tslint:disable-next-line: variable-name
  constructor(private _peopleDetailsService: PeopleDetailsService) {}

  ngOnInit(): void {
    this.people = this._peopleDetailsService.getPersonDetails();
  }
}
