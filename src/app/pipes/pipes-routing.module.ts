import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PipesComponent} from "./components/pipes/pipes.component";

const routes: Routes = [
  {
    path: '',
    component: PipesComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class PipesRoutingModule {
}
