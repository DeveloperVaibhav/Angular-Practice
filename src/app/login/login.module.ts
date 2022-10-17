import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { MathServiceService } from '../component-communication/math-service.service';

//console.log("Login module");

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DemoComponent],

  //We are providing service at Module level
  //MathServiceService is available only for all the components inside login module
  //If we inject this same service in component as well then it will create one another object for 
  //service at component level
  providers: [MathServiceService] 
})
export class LoginModule {
   //In module, we can write code inside constructor only 
   constructor(){
    console.log("Login module");
  }
 }
