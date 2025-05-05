import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]',
})
export class CustomDirective {
  constructor(private myRef: ElementRef) {
    this.myRef.nativeElement.style.transition = 'all 0.3s ease';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.myRef.nativeElement.style.transform = 'scale(1.1)';
    this.myRef.nativeElement.style.boxShadow =
      '0px 20px 25px rgba(79, 5, 108, 0.39)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.myRef.nativeElement.style.transform = 'scale(1)';
    this.myRef.nativeElement.style.boxShadow = 'none';
  }
}
