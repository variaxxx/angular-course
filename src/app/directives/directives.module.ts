import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDirectivesComponent } from './directives.component';
import { MyDirectivesRoutingModule } from './directives-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ MyDirectivesComponent ],
    imports: [ CommonModule, MyDirectivesRoutingModule, FormsModule ],
    exports: [ MyDirectivesComponent ],
    providers: [],
})
export class MyDirectivesModule {}