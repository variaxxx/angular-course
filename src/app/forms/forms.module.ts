import {NgModule} from '@angular/core';
import {FormsComponent} from "./components/forms/forms.component";
import {CommonModule} from "@angular/common";
import {FormsRoutingModule} from "./forms-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [ CommonModule, FormsRoutingModule, ReactiveFormsModule, FormsRoutingModule ],
  exports: [],
  declarations: [ FormsComponent ],
  providers: [],
})
export class FormsModule {
}
