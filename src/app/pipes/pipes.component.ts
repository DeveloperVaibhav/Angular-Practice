import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name: string = "SacHiN TeNdUlKaR";
  mySal: number = 3899391731;
  today = new Date();
  user = { name: "sachin", age:35, sal: 500009484}
  text: any = '';
}
