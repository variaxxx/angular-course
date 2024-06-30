import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyDirectivesComponent } from './components/directives.component';
import { MyDirectivesRoutingModule } from './directives-routing.module';
import { MyChangeColorDirective } from './directive/my-change-color.directive';
import { MyIfDirective } from './directive/my-if.directive';
import { MyZoomDirective } from './directive/my-zoom.directive';

@NgModule({
    declarations: [ MyDirectivesComponent, MyChangeColorDirective, MyIfDirective, MyZoomDirective ],
    imports: [ MyDirectivesRoutingModule, CommonModule ],
    exports: [],
    providers: [],
})
export class MyDirectivesModule {}