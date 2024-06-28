import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDirectivesComponent } from './components/directives.component';
import { MyDirectivesRoutingModule } from './directives-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [ MyDirectivesComponent ],
    imports: [ CommonModule, MyDirectivesRoutingModule, FormsModule, BrowserModule ],
    exports: [ MyDirectivesComponent ],
    providers: [],
})
export class MyDirectivesModule {}