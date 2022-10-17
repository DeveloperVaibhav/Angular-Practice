import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }

 private empList =
    [
      { eId: 101, name: 'Vaibhav don', gender: 'male', salary: '25000' },
      { eId: 102, name: 'Chadu don', gender: 'female', salary: '459899813000' },
      { eId: 103, name: 'Pravin don', gender: 'male', salary: '35000' },
      { eId: 104, name: 'Jayan don', gender: 'female', salary: '513314135000' },
      { eId: 105, name: 'Ganesh don', gender: 'male', salary: '2033875000' },
      { eId: 106, name: 'Ameya don', gender: 'male', salary: '25000' }
    ]

    public getAllEmp(){
      return this.empList;
    }

    public getMaleEmp(){
      // return this.empList.filter(emp =>{emp.gender ==='male'});
      //dont use curly braces for single statement here otherwise won't filter the array and array is empty
      return this.empList.filter(emp => emp.gender ==='male');
    }

    public getFemaleEmp(){
      return this.empList.filter(emp => emp.gender ==='female');
    }
}
