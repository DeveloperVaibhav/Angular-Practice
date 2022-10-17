import { Component, OnInit } from '@angular/core';
import { MathServiceService } from '../component-communication/math-service.service';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
  //If we comment out this service then updated name will refect in both the component i.e. emp and employee-list
  providers: [MathServiceService],
})
export class EmpComponent implements OnInit {

  //As we are providing MathServiceService at component level, 
  //so it will create another object for this service at component level (other than angular object)
  constructor(private empService: EmpService, public math: MathServiceService) { }

  employeeList: any[] = [];

  //whatever we write inside ngOnInit() method will reflect on page load
  //when we need to call any method on page load then write them inside ngOnInit() method
  ngOnInit(): void {
    //updating name from MathService 
    this.math.name = "Nayan";

    // this.employeeList = this.empService.empList;

    //this method inside ngOnInit() will be called on page load
    this.getAllEmployee();

  }

  //this method will be called on click,so define outside ngOnInit() method
  getAllEmployee() {
    this.employeeList = this.empService.getAllEmp();
  }

  //this method will be called on click, so define outside ngOnInit() method
  getMaleEmployee() {
    this.employeeList = this.empService.getMaleEmp();
  }

  //this method will be called on click,so define outside ngOnInit() method
  getFemaleEmployee() {
    this.employeeList = this.empService.getFemaleEmp();
  }

}
