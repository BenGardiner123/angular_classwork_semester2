import { Component } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onCounted(value: number)
  {this.total += value;
  }
  }

