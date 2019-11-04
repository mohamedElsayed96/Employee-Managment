import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {

  numberOfClicks: number = 0;
  constructor(private renderer: Renderer2,private element: ElementRef)
  {

  }
  @HostListener('click') clicked()
  {
      if(this.numberOfClicks <= 0)
      {
          this.numberOfClicks ++;
          this.renderer.addClass(this.element.nativeElement, 'show');
         
      }
      else
      {
          this.numberOfClicks = 0;
          this.renderer.removeClass(this.element.nativeElement, 'show');

      }
  }

}
