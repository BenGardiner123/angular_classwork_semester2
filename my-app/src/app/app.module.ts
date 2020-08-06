import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { addressComponent}from './address.component';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CounterComponent } from './counter/counter.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    addressComponent,
    CityComponent,
    CounterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
