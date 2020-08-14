import { Component } from '@angular/core';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the coolest contacts list in the world';
  
  contacts: Contact[] = [
    new Contact("Bill", "Mx", "10 Union Pl, Melbs", "https://i.imgur.com/CMAFTuK.jpeg"),
    new Contact("Sonny", "Mr", "50 Sussex St Melbs", "https://i.imgur.com/MidVjdX.jpeg"),
    new Contact("William", "Ms", "30 King Street, Melbs", "https://i.imgur.com/tkQtl1h.jpeg"),
    new Contact("Kent", "Mx", "88 Jack Street, Melbs", "https://i.imgur.com/D0vgwP8.jpeg"),
  ];

  

  showContacts: boolean = true;

  onToggleContacts() {
    this.showContacts = !this.showContacts;
    
  }

  onRemove(contact: Contact)
  {
    let choosMe = this.contacts.indexOf(contact);
    this.contacts.splice(choosMe, 1);
  }


}