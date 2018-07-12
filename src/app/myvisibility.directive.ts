import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective implements OnInit {
  @Input('visibility') visibility: boolean;
  constructor(private element: ElementRef, private render2: Renderer2) {}
  ngOnInit() {
    console.log('Inside Directive [visibility]: ' + this.visibility);
    if (!this.visibility) {
      this.element.nativeElement.style.display = 'none';
      this.render2.setStyle(this.element.nativeElement, 'display', 'none');
    }
  }
}
