import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { addressComponent}from './address.component';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';

@NgModule({
  declarations: [
    AppComponent,
    addressComponent,
    CityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
