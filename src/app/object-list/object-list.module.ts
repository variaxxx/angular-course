import { NgModule } from '@angular/core';
import { MyObjectListComponent } from './components/object-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [MyObjectListComponent],
	imports: [CommonModule],
	exports: [MyObjectListComponent],
	providers: [],
})
export class FeatureModule {}