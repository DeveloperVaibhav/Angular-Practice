import { Injectable } from '@angular/core';

@Injectable(
  // {
  // //can be access anywhere in project
  // providedIn: 'root'
  // }
)
export class MathServiceService {

  constructor() { }

  name: string = 'Vaibhav';

  add(a:number, b:number){
    return a+b;
  }

  sub(a:number, b:number){
    return a-b;
  }

}
