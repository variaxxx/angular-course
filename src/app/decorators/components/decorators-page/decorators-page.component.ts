import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {ChildDecoratorComponent} from "../child-decorator/child-decorator.component";

@Component({
  selector: 'decorators-page',
  templateUrl: 'decorators-page.component.html',
  styleUrls: ['decorators-page.component.scss']
})

export class DecoratorsPageComponent implements AfterViewInit {

  public arr = [1, 2, 3, 4, 5];

  public isShow: boolean = true;

  @ViewChild('paragraph, sddf') paragraph?: ElementRef<HTMLParagraphElement>;
  @ViewChild('paragraph') paragraphTemplate?: ElementRef<HTMLParagraphElement>;
  @ViewChild('component') component?: ChildDecoratorComponent;

  @ViewChildren(ChildDecoratorComponent) childComponents?: QueryList<ChildDecoratorComponent>;

  ngAfterViewInit() {
    console.log(this.paragraph);

    console.log(this.paragraph?.nativeElement.textContent);

    console.log(this.paragraphTemplate);

    console.log(this.component);

    console.log(this.childComponents)
  }
}
