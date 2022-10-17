import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logForm(formData: any){
    console.log(formData);
  }

  // clearMyform(myForm: any){
  //   myForm.reset();
  // }

  clearMyform(myForm :NgForm) {
    myForm.resetForm();
  }
}
