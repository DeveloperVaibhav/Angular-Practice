import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleToName'
})
export class TitleToNamePipe implements PipeTransform {

  // transform method always return something
 // transform(name: string, ...args: any): any {
  transform(name: string, gender: any): any {

    if(gender == 'male'){
      return "Mr. " + name;
    }else{
      return "Mrs. " + name;
    }

    // OR
    // if(args[0] == 'male'){
    //   return "Mr. " + name;
    // }else{
    //   return "Mrs. " + name;
    // }

  }

}
