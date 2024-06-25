import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyCalcComponent } from './components/my-calc.component';

@NgModule({
	declarations: [ MyCalcComponent ],
	imports: [ CommonModule, FormsModule ],
	exports: [ MyCalcComponent ],
	providers: [],
})
export class MyCalcModule {}