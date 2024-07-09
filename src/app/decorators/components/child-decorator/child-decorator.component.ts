import {AfterContentInit, Component, ContentChildren, ElementRef, QueryList} from '@angular/core';

@Component({
  selector: 'app-child-decorator',
  templateUrl: './child-decorator.component.html',
  styleUrl: './child-decorator.component.scss'
})
export class ChildDecoratorComponent implements AfterContentInit {
  public title = 'Hello';
  private _second = 'World';

  @ContentChildren('content, content2') content?: QueryList<ElementRef>;

  public ngAfterContentInit() {
    this.content && console.log(this.content);
  }
}
