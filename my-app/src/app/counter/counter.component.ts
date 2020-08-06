import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter = 0;
  fontColour: string = 'black';

  constructor() { }

  ngOnInit(): void {
  }

  onComponentClick(value: any)
  {console.log(event)
    if(this.counter >=10)
      this.fontColour = 'red';
    this.counter += 1;
  }

}
