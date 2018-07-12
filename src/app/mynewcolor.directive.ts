import { Directive, ElementRef, Renderer2, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective {
  @Output() sendColor = new EventEmitter();

  @Input('mycolor') mycolor: string;
  constructor(private element: ElementRef, private render2: Renderer2) {}

  @HostListener('click') changeColor() {
        this.element.nativeElement.style.color = this.mycolor;
        this.render2.setStyle(this.element.nativeElement, 'color', this.mycolor);
        this.sendColor.emit(this.mycolor);
      }
  }
