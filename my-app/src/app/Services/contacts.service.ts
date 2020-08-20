import { Injectable } from '@angular/core';
import { Contact } from '../contact/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    new Contact("Bill", "Mx", "10 Union Pl, Melbs", "https://i.imgur.com/CMAFTuK.jpeg"),
    new Contact("Sonny", "Mr", "50 Sussex St Melbs", "https://i.imgur.com/MidVjdX.jpeg"),
    new Contact("William", "Ms", "30 King Street, Melbs", "https://i.imgur.com/tkQtl1h.jpeg"),
    new Contact("Kent", "Mx", "88 Jack Street, Melbs", "https://i.imgur.com/D0vgwP8.jpeg"),
  ];

  showContacts: boolean = true;

  constructor() { }
}
