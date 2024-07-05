import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {DecoratorsPageComponent} from "./components/decorators-page/decorators-page.component";
import {DecoratorsRoutingModule} from "./decorators-routing.module";

@NgModule({
  imports: [ CommonModule, DecoratorsRoutingModule ],
  exports: [],
  declarations: [ DecoratorsPageComponent ],
  providers: [],
})
export class DecoratorsModule {
}
