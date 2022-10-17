import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MathServiceService } from '../math-service.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['a_value','cars'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

//if we implements any interface (methods like OnInit) then we compulsary need to implement
// its method ngOnInit()

// export class Child1Component implements OnInit {
//OR
//if we don't write 'implements OnInit' then not necessary to define ngOnInit() method
//this will also work
export class Child1Component{ 

  cars: any;
  a_value: any;
  name: string = "You are awesome";

  //if we make the servive reference as private then we can access the member of 
  //service directly only in ts file and can not access the member of service in html file directly
  constructor(
    private changeDetectorObj: ChangeDetectorRef,
    public mathObj: MathServiceService //dependency injection
    ) {
    //will reflect the changes after 2 seconds
    setInterval(() => {
      this.changeDetectorObj.markForCheck();
    }, 2000);
  }
  
  ngOnInit() {
    console.log('Child1 ngOnInit');
    //OR    let mathObj = new MathServiceService();
    console.log("addition: ", this.mathObj.add(20,5));
    console.log("Substraction: ",this.mathObj.sub(20,5));
  }
  // ngOnChanges() {
  //   console.log('Child1 ngOnChanges');
  // }
  // ngDoCheck() {
  //   //need to write inside this method, constructor or create custom method
  //   this.changeDetectorObj.markForCheck();
  // }

  // refresh(){
  //   this.changeDetectorObj.markForCheck();
  // }
  // ngAfterContentInit() {
  //   console.log('Child1 ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Child1 ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('Child1 ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Child1 ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Child1 ngOnDestory');
  // }
}
