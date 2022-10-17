import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[highlightDirective]'
})
export class Highlight  {

  constructor(private ele: ElementRef) {
    console.log(ele);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green', 'white');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '');
  }
  private highlight(bgColor: string, textcolor: string) {
    this.ele.nativeElement.style.backgroundColor = bgColor;
    this.ele.nativeElement.style.color = textcolor;
  }
  
}

