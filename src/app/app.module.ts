import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCalcModule } from './calculator/my-calc.module';
import { MyNavigation } from './components/navigation/navigation.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';


@NgModule({
  declarations: [
    AppComponent,
	MyNavigation,
	MyEmptyPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	MyCalcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
