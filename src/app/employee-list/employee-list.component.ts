import { Component, OnInit } from '@angular/core';
import { MathServiceService } from '../component-communication/math-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //this will create one object for MathServiceService by angular 
  constructor(public math: MathServiceService) { }

  ngOnInit(): void {
  }

  employeeList : any = [
    {eId:101, name:'Vaibhav don', gender:'male', salary:'25000'},
    {eId:102,name:'Chadu don', gender:'female', salary:'459899813000'},
    {eId:103,name:'Pravin don', gender:'male', salary:'35000'},
    {eId:104,name:'Nayan don', gender:'female', salary:'513314135000'},
    {eId:105,name:'Ganesh don', gender:'male', salary:'2033875000'}
  ]

  // addEmp(){
  //   this.employeeList.push({name:'Ameya don', gender:'male', salary:'25000'});
  // }
 //OR

  //demo of trackBy to improve performance
  addEmp(){
    this.employeeList = [
      {eId:101, name:'Vaibhav don', gender:'male', salary:'25000'},
      {eId:102,name:'Chadu don', gender:'female', salary:'459899813000'},
      {eId:103,name:'Pravin don', gender:'male', salary:'35000'},
      {eId:104,name:'Jayan don', gender:'female', salary:'513314135000'},
      {eId:105,name:'Ganesh don', gender:'male', salary:'2033875000'},
      {eId:106,name:'Ameya don', gender:'male', salary:'25000'}
    ]

  }

  //check the unique id of employee before adding employee (will affect only one row)
  //when we don't use trackBy then all the rows will be affected
  //will also update Nayan ---> Jayan 
  trackByEmpId(empObj: any){
    return empObj.eId;
  }

  //CRUD - adding emp
  EId: string='';
  Name: string='';
  Gender: string='';
  Salary: string='';

  addingEmp(){

    if(this.EId.trim().length==0){
      alert("Employee Id can not be empty");
    }else{
      this.employeeList.push({eId: this.EId, name:this.Name, gender:this.Gender, salary:this.Salary});
    }
    
  }

}
