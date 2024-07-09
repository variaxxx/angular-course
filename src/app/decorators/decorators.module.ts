import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {DecoratorsPageComponent} from "./components/decorators-page/decorators-page.component";
import {DecoratorsRoutingModule} from "./decorators-routing.module";
import { ChildDecoratorComponent } from './components/child-decorator/child-decorator.component';

@NgModule({
  imports: [ CommonModule, DecoratorsRoutingModule ],
  exports: [],
  declarations: [ DecoratorsPageComponent, ChildDecoratorComponent ],
  providers: [],
})
export class DecoratorsModule {
}
