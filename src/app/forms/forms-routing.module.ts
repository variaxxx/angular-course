import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsComponent} from "./components/forms/forms.component";

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class FormsRoutingModule {
}
