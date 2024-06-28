import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalcComponent } from './calculator/components/my-calc.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { MyObjectListComponent } from './object-list/components/list/object-list.component';
import { MyDirectivesComponent } from './directives/components/directives.component';

const routes: Routes = [
	{
		path: 'calculator',
		component: MyCalcComponent,
	},
	{
		path: 'object-list',
		loadChildren: () => import('./object-list/object-list.module').then((m) => m.MyObjectListModule)
	},
	{
		path: 'directives',
		component: MyDirectivesComponent,
	},
	{
		path: '', 
		redirectTo: 'calculator',
		pathMatch: 'full',
	},
	{
		path: '**',
		component: MyEmptyPage,
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
