import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverDirective]'
})

export class HoverDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {

  }


  ngOnInit(){

  }
  @HostListener('mouseenter') mouseEnter(event: Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'royalblue');
  }
  @HostListener('mouseleave') mouseLeave(event: Event){
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#000');
  }
}

