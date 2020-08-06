import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input()
  title: string = "default counter";
  
  @Output()
  counted: EventEmitter<number> = new EventEmitter<number>();

  counter = 0;
  fontColour: string = 'black';

  constructor() { }

  ngOnInit(): void {
  }

  onComponentClick(value: any)
  {console.log(event)
    this.counted.emit(1);
    if(this.counter >=10)
      this.fontColour = 'red';
    this.counter += 1;
  }



}
