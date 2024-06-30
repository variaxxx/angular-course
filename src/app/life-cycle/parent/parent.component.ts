import { Component } from '@angular/core';

@Component({
    selector: 'parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

    public str: string = 'title';

    public handleEvent(value: string) {
        this.str = value;
    }

}
