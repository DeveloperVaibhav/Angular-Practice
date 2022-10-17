import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { MyInterceptor1 } from '../utils/my-interceptor1';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  //Interceptor won't work at component level like this
  // providers: [ { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor1, multi: true },]
})
export class UserComponent implements OnInit {

  users: any;
  isLoading: boolean;

  constructor(public userService: UserService) { 
    //better place to initialize the variables
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(){
    this.isLoading = true;
    this.userService.getUsers().subscribe(response => {
      //Here we are intentionally providing delay, ideally we should not do.
      //In real project API itself will take time
      setTimeout(()=>{
        this.users = response;
        this.isLoading = false;
      },3000);
    });
    
  }

  // addNewUser(name:string,email:string,phone:string,website:string){
  // // when we use same variable then we can directly use like this as well
  //   let newUser = {name,email,phone,website}
  //OR
  addNewUser(a:string,b:string,c:string,d:string){
    let newUser = {name: a,email: b,phone: c,website: d}
    this.userService.addUser(newUser).subscribe(response => {
      Swal.fire('Data added successfully');
      this.fetchUsers();
    });
  }

  deleteUser(id: any){
    this.userService.deleteUser(id).subscribe(response=>{
      Swal.fire("User deleted successfully");
      this.fetchUsers();
    })
  }

}
