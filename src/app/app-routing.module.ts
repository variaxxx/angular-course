import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalcComponent } from './calculator/components/my-calc.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';

const routes: Routes = [
	{
		path: 'calculator',
		component: MyCalcComponent,
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
