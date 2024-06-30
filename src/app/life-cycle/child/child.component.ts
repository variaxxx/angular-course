import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
    selector: 'child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

    @Input() title!: string;

    @Output() eventChange = new EventEmitter<string>()

    constructor() {
        console.log('%cConstructor', 'color: red')
    }

    public tempTitle!: string;

    // ngOnChanges(changes: SimpleChanges): void {
    //     console.log('%cngOnChanges', 'color: beige')           
    // }

    ngOnInit(): void {
        this.tempTitle = this.title;
        console.log('%cngOnInit', 'color: blue')
    }

    ngDoCheck(): void {
        console.log('%cngDoCheck', 'color: green')
    }

    ngAfterContentInit(): void {
        console.log('%cngAfterContentInit', 'color: yellow')        
    }

    ngAfterViewInit(): void {
        console.log('%cngAfterViewInit', 'color: orange')   
    }

    ngOnDestroy(): void {
        console.log('%cngOnDestroy', 'color: violet')        
    }

    public clickHandler(): void {
        this.tempTitle = 'Im mutated';
        this.eventChange.emit(this.tempTitle);
    }

}
