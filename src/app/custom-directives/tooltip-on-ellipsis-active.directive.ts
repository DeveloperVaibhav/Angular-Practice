import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[isEllipsisActive]'
})
export class TooltipOnEllipsisActiveDirective implements AfterViewInit{

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    setTimeout(() => {
      const element = this.elementRef.nativeElement;
      if(element.offsetWidth < element.scrollWidth){
        element.title = element.innerHTML;
      }
    }, 500);
    
  }

}
