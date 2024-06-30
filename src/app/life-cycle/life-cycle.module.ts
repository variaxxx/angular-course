import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { LifeCycleRoutingModule } from './life-cycle-routing.module';

@NgModule({
    declarations: [ ChildComponent, ParentComponent ],
    imports: [ CommonModule, LifeCycleRoutingModule ],
    exports: [],
    providers: [],
})
export class LifeCycleModule {}