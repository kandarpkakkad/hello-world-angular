import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeopleDetailsService {
  constructor() {}

  getPersonDetails(): Array<any> {
    return [
      { name: 'Kandarp Kakkad', age: 22, phone: true },
      { name: 'Himanshu Prajapati', age: 20, phone: true },
      { name: 'Siddharth Marvania', age: 21, phone: true },
    ];
  }
}
