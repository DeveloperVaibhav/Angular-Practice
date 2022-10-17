import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable2',
  templateUrl: './observable2.component.html',
  styleUrls: ['./observable2.component.css']
})
export class Observable2Component implements OnInit {

  publisher1: any;
  subscriber1: any;
  responseData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    //publisher/producer 
    //this part will be written at backend
    //created here only for testing
    this.publisher1 = new Observable(function (publisher) {
      //publishing the data 3 times or creating 3 phases of api
      console.log('I am publishing first 2 data');
      publisher.next(['oneeeee', 'twoooooo']);//ex.can be 100 objects
      console.log('I am publishing next 2 data');
      publisher.next(['threee', 'fourrrr']);
      console.log('I am publishing final 1 data');
      publisher.next(['fiveeee']);
      publisher.complete();
    });

    //consumer
    //we are getting the data over the time
    this.subscriber1 = this.publisher1.subscribe({
      //next method is called 3 times
      next: (response:any)=> {//partial data
        console.count('next called');
        console.log(response); 
        this.responseData = this.responseData.concat(response);
        console.log(this.responseData);
      },
      error: (err:any)=> {
        console.log(err); 
      },
      complete: ()=> {
        console.log('final data received');
      }
    })
  }


}

