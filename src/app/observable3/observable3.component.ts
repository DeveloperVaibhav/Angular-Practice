import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-observable3',
  templateUrl: './observable3.component.html',
  styleUrls: ['./observable3.component.css']
})
export class Observable3Component implements OnInit {

  finalData: any[] = [];
  
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.fetchDetails();
  }

  fetchDetails() {
    let request1 = this.httpClient.get('https://jsonplaceholder.typicode.com/todos'); //5 sec

    let request2 = this.httpClient.get('https://jsonplaceholder.typicode.com/users'); //3 sec

    //This is the combined data of 2 request 
    //when 2 rest call are independent then prefer this one
    forkJoin([request1,request2]).subscribe((responseArr) =>{ //5 sec(parallel call)- max time of 2 api
      console.log('response array: ', responseArr);
      this.finalData = responseArr;
      console.log(this.finalData);
    });
    //OR (shift + alt + A  ---> for miltiline comments)
    /* forkJoin([request1,request2]).subscribe(([response1,response2]) =>{
       console.log(response1,response2);
       this.finalData = [response1,response2];
       console.log(this.finalData);

    }); */

    //when 2 rest call are dependent then prefer this one
    //eg. order api is dependent on payment api of flipkart 
    //once payment done only then order placed 
    /* request1.subscribe((res1:any) => {  //8 sec(sequential call)
      request2.subscribe((res2:any) => {
        this.finalData.push(res1,res2);
        console.log(this.finalData);
      });
    }); */
  }
}
