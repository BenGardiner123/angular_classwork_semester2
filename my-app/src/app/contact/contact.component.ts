import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input()
  name = "";

  @Input()
  title = "";

  @Input()
  address = "";
  
  @Input()
  profilePicUrl= "";

  constructor() { }

  ngOnInit(): void {


  }




}
