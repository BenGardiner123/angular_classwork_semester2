import { AccountService } from './Services/account.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  public accountService: AccountService;

  constructor(accountService: AccountService) {
    
    this.accountService = accountService;
  }

  title = 'ServicesExample';
  
  performLogin(){
    this.accountService.login("bob");
  }

 


}