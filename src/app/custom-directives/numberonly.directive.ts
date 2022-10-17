import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numberonly]'
})
export class NumberonlyDirective {

  constructor( private ele: ElementRef ) { }

  @HostListener('keyup', ['$event'])
  handleKeyPress(e:{target:{value:string}}){
    let regex = new RegExp(/^[0-9]*$/);
    if(!regex.test(e.target.value)){
      this.ele.nativeElement.style.backgroundColor = 'red';
    }else{
      this.ele.nativeElement.style.backgroundColor = 'cyan';
    }
  }

}
