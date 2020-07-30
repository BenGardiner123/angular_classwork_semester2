import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is another thing here';
  counter: number = 0;

  onCoolButtonClick(){
    //this.counter = this.counter += 1;
    this.counter ++;

    if(this.counter % 5  == 0)
    {
    this.title = "fizz";
    }
    if (this.counter % 3 == 0)
    {
    this.title = "buzz";
    }
    else{
      this.title = "boring";
    }
  }
}
