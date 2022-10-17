import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertionOfSalary'
})
export class ConvertSalaryPipe implements PipeTransform {

  // transform method always return something
  transform(sal: number): any {
    
    //convert to thousand upto to decimal places
    if(sal >= 1000 && sal <= 999999){
      return +(sal/1000).toFixed(2) + 'k';
    }//convert to million upto to decimal places
    else if(sal >= 1000000 && sal <= 999999999) {
      return +(sal/1000000).toFixed(2) + 'Mn';
    }//convert to billion upto to decimal places
    else if(sal >= 1000000000 && sal <= 999999999999) {
      return +(sal/1000000000).toFixed(2) + 'Bn';
    }
    else{
      return sal;
    }
  }

}
