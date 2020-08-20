import { ProfileComponent } from './../profile/profile.component';
import { ContactsService } from './../Services/contacts.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  constructor(public contactsService: ContactsService) { 

    
  }

  ngOnInit(): void {
  }
}
