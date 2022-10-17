import { Component, OnInit } from '@angular/core';
import { MathServiceService } from '../math-service.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  inputs: ['child1_ref']
})
export class Child2Component implements OnInit {

  constructor(public mathObj1: MathServiceService) { }

  ngOnInit(): void {
  }

  child1_ref: any;
}
