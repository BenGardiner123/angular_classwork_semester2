import { AccountService } from './Services/account.service';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { Component } from '@angular/core';
import { Contact } from './contact/contact';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public accountService: AccountService;

  constructor(accountService: AccountService) {
    
    this.accountService = this.accountService;
  }

  
  performLogin(){
    this.accountService.login("Bob");
  }

 


}