import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  name: string = "vaibhav";

  constructor() { }

  ngOnInit(): void {
  }

  img_url: string = "https://images4.alphacoders.com/378/37864.jpg";
  flag: boolean = false;
  user: any = { name: "vaibhav", age: 25, add: 'nagpur' };
  cars = ['BMW', 'audi', 'honda'];

  f1() {
    console.log("You are inside f1...");
  }

  flag1: boolean = false;

  // when we use class variable inside a function then use this.flag1
  toggleFlag() {
    this.flag1 = !this.flag1;
  }

  txt: string = "password";

  showPassword() {
    if (this.txt === "password") {
      this.txt = "text";
    }
    else {
      this.txt = "password";
    }
  }

  val1: number = 0;
  val2: number = 0;

  addition(a: any, b: any) {  // OR addition(a:string, b:string){
    console.log("addition: " + (+a + +b));//convert string to integer as input will be in the form of string
  }

  val: number = 0;


}
