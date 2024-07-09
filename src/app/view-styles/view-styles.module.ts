import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBarComponent } from './components/view-bar/view-bar.component';
import { ViewFooComponent } from './components/view-foo/view-foo.component';
import {ViewStylesRoutingModule} from "./view-styles-routing.module";



@NgModule({
  declarations: [
    ViewBarComponent,
    ViewFooComponent
  ],
  imports: [
    CommonModule,
    ViewStylesRoutingModule
  ]
})
export class ViewStylesModule { }
