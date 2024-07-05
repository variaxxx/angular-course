import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalcComponent } from './calculator/components/my-calc.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { MyIOSCalculatorComponent } from './ios-calculator/components/ios-calculator.component';

const routes: Routes = [
	{
		path: 'calculator',
		component: MyCalcComponent,
	},
	{
		path: 'ios-calculator',
		component: MyIOSCalculatorComponent,
	},
	{
		path: 'object-list',
		loadChildren: () => import('./object-list/object-list.module').then((m) => m.MyObjectListModule)
	},
	{
		path: 'directives',
		loadChildren: () => import('./directives/directives.module').then((m) => m.MyDirectivesModule)
	},
	{
		path: 'life-cycle',
		loadChildren: () => import('./life-cycle/life-cycle.module').then((m) => m.LifeCycleModule)
	},
	{
		path: 'requests',
		loadChildren: () => import('./requests/requests.module').then((m) => m.RequestsModule)
	},
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then((m) => m.FormsUIModule)
  },
  {
    path: 'decorators',
    loadChildren: () => import('./decorators/decorators.module').then((m) => m.DecoratorsModule)
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
