import { Directive, Input, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  @Input('appZoom') zoomLevel: string;
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @HostListener('click') onMouseClick() {
    this.zoomFont(this.zoomLevel || '1.1em');
  }

  private zoomFont(fontSize: string) {
    this.el.style.fontSize = fontSize;
  }

}
