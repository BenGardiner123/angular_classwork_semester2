import { Component } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "BoJangles";
  title = "Mr.";
  imgUrl= "https://i.imgur.com/ijGvcFr.jpg";
  address = "";

}
