import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  n: number = 5;

  employee: any={firstName:"Ram", lastName: "", age:null, add:undefined };

  cars: string[] = ['BMW','maruti','Audi','toyota','duster'];

  flag: boolean = true;

  toggleFlag(){
    this.flag != this.flag;
  }

  //we can not keep any property of object blank without using optional chaining operator
  emps: any = [
    {firstName:"Ram", lastName: "don", age:23, add:{city:'hinganghat', state:'MH', pin:1234}, car:['honda','nano'] },
    {firstName:"shyam", lastName: "don", age:23, add:{city:'hinganghat', state:'TN', pin:1234}, car:[]},
    {firstName:"Chandu", lastName: "don", age:23, add:{city:'hinganghat', state:'AP', pin:1234} },
    {firstName:"Chandu", lastName: "don", age:23 }
  ]
}
