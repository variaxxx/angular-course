import { Component } from '@angular/core';

@Component({
    selector: 'directives',
    templateUrl: './directives.component.html',
    styleUrls: ['./directives.component.scss']
})
export class MyDirectivesComponent {

    // ngFor

    public colors: string[] = ['red', 'blue', 'green', 'yellow'];

    // ngIf

    public isShow: boolean = true; 

    // ngSwitch

    public currentColor: string = this.colors[0];

    // ngStyle

    public elementStyle: any = {
        color: 'red',
        "font-size": '50px'
    }
}
