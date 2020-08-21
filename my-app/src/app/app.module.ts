import { AccountService } from './Services/account.service';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactlistComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }