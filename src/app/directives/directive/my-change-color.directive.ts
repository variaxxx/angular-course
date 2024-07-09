import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[myChangeColor]'
})
export class MyChangeColorDirective implements AfterViewInit {

  @HostBinding('style.color') color: string = 'orange';
  @HostBinding('class.directive') class: boolean = false;
  @HostBinding('style.background') background: string = 'transparent';

  @HostListener('document:click', ['$event']) handleClick(event: PointerEvent): void {
    console.log('click', event)
  }

  @HostListener('mouseenter') handleEnter(): void {
    this.background = this.getChangeColor();
  }

  @HostListener('mouseleave') handleLeave(): void {
    this.background = 'transparent';
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.color = this.getChangeColor();
    }, 1000)
  }

  private getChangeColor(): string {
    return  '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
