import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MathServiceService } from '../math-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  //this is like document.querySelector() or any other DOM manipulation in typescript
  //this can be used as alternative to document.getElementById()
  //used to manipulate on only one element
  @ViewChild('myInputbox1') inputBox1: any;
  @ViewChild('myInputbox2') inputBox2: any;

  //this is like document.querySelectorAll()
  //used to manipulate on multiple element
  @ViewChildren('myInputbox2') multipleInputBox: any;

  a = 20;
  name: string = 'Sachin Tendulkar';
  cars = ['honda', 'tata', 'bmw', 'audi'];

  constructor(public mathObj: MathServiceService) {
    console.log("Parent constructor")
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
    console.log("addition in parent: ", this.mathObj.add(20,5));
  }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }


  //this is the best place for DOM manipulation.
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.inputBox1); 
    //@ViewChild --> ElementRef --> {nativeElement : value} .....[check in console]
    this.inputBox1.nativeElement.focus();
    this.inputBox1.nativeElement.style.backgroundColor = 'cyan';
    
    console.log(this.multipleInputBox);
    //@ViewChildren --> QueryList --> _results array --> ElementRef --> {nativeElement : value}
    this.multipleInputBox._results?.forEach( (ele:any) => {
      console.log(ele);
      ele.nativeElement.style.backgroundColor = 'yellow';
      ele.nativeElement.style.margin = '10px';
    });
    
    this.inputBox2.nativeElement.style.backgroundColor = 'green';
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
