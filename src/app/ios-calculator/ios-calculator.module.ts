import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyIOSCalculatorComponent } from './components/ios-calculator.component';

@NgModule({
    declarations: [ MyIOSCalculatorComponent ],
    imports: [ CommonModule ],
    exports: [MyIOSCalculatorComponent],
    providers: [],
})
export class MyIOSCalculatorModule {}