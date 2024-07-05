import {NgModule} from '@angular/core';
import {FormsComponent} from "./components/forms/forms.component";
import {CommonModule} from "@angular/common";
import {FormsRoutingModule} from "./forms-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RateComponent } from './components/rate/rate.component';

@NgModule({
  imports: [ CommonModule, FormsRoutingModule, ReactiveFormsModule, FormsModule ],
  exports: [],
  declarations: [ FormsComponent, RateComponent ],
  providers: [],
})
export class FormsUIModule {
}
