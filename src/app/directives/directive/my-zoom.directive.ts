import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[myZoom]',
})
export class MyZoomDirective{ 

    @Input('myZoom') size: any;

    constructor(
        private el: ElementRef
    ) {}    
    
    @HostListener('mouseenter') onMouseIn() {
        this.changeSize(this.size);
    }

    @HostListener('mouseleave') onMouseOut() {
        this.changeSize(20);
    }

    private changeSize(value: number | string): void {
        this.el.nativeElement.style.fontSize = `${value}px`;
    }
}