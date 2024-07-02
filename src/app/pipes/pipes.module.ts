import {NgModule} from '@angular/core';
import {PipesComponent} from "./components/pipes/pipes.component";
import {CommonModule} from "@angular/common";
import {PipeItemComponent} from "./components/pipe-item/pipe-item.component";
import {PipesRoutingModule} from "./pipes-routing.module";
import { CustomPipe } from './pipe/custom.pipe';

@NgModule({
  imports: [ CommonModule, PipesRoutingModule ],
  exports: [],
  declarations: [ PipesComponent, PipeItemComponent, CustomPipe, CustomPipe ],
  providers: [],
})
export class PipesModule {
}
