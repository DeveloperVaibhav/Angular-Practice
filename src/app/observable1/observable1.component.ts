import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.css']
})
export class Observable1Component implements OnInit {

  users: any[] = [];
  comments: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchComments();
  }

  //fetch method from JS
  fetchUsers() {
    //Limitations using fetch method over observable
    //can not use interceptor
    //return promise 
    //easy csrf and other limitations
    let promiseObj = fetch('https://jsonplaceholder.typicode.com/users');
    promiseObj.then(response => response.json()).then(finalResponse => {
      this.users = finalResponse;
    })
  }

  fetchComments(){
    let observableObj = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');
    //when we subscribe the data from observable, we write 3 functions(2 functions are optional)
    //collecting the data from oobservable object
    observableObj.subscribe({
      //if we have a huge data to fetch say 2000000 records 
      //next method provide partial data - ex. 1000+1000+1000+....
      //but this is only possible when the backend api is designed in such a way that get the records in phases 
      //otherwise will fetch all the data at a time and next and complete method will have no significance
      //backend people will use RxJava library which alos uses observable for developing such api
      //next method will be called everytime for the 1000 records
      //if we are having 5000 records then next method will call 5 times and then complete method is called

      //by default next method
      next: (response:any)=>{//here will fetch all the records at once
        this.comments = response;
        console.log(response.length);
      },
      error: (err)=>{
        console.log('error occured',err);
      },
      complete: ()=>{//won't take any argument
        console.log('final data received');
      }
    });
  }


//LIC - 1.whole amount = 1,00,000
//      2.moneyback = 1,00,000 + 1,00,000 + 1,00,000 + ....


}
