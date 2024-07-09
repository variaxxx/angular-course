import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ViewFooComponent} from "./components/view-foo/view-foo.component";

const routes: Routes = [
	{
		path: '',
		component: ViewFooComponent
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [],
})
export class ViewStylesRoutingModule {
}