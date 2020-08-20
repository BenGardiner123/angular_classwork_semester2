
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public accountService: AccountService;

  
  constructor(accountService: AccountService) {
    
    this.accountService = this.accountService;
  }


  ngOnInit(): void {
  }

}
