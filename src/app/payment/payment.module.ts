import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';

//console.log("Payment module"); 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { 

  //In module, we can write code inside constructor only 
  constructor(){
    console.log("Payment module");
  }
}
