import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  
  transform(num: number): any {
    let ord = ['th','st','nd','rd','th','th','th','th','th','th'];

    let val = num%10;
    
    if(num){
      if(num>10 && num<=20){
        return num + 'th';
      }else{
        return num + ord[val];
      }
    }
  }

}
