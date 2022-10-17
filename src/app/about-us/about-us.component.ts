import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCareer(){
    console.log("Do stuff 1..");
    console.log("Do stuff 2..");
    console.log("Do stuff 3..");
    //here we are using the router service to navigate to Career component
    //this path sould get match with the path value in app-routing file
    this.router.navigate(["/career"]);
  }

}
