import { NgModule } from '@angular/core';
import { MyObjectListComponent } from './components/list/object-list.component';
import { CommonModule } from '@angular/common';
import { MyObjectItemComponent } from './components/item/object-item.component';
import { MyObjectListRoutingModule } from './object-list-routing.module';

@NgModule({
	declarations: [MyObjectListComponent, MyObjectItemComponent],
	imports: [CommonModule, MyObjectListRoutingModule],
	exports: [MyObjectListComponent, MyObjectItemComponent],
	providers: [],
})
export class MyObjectListModule {}