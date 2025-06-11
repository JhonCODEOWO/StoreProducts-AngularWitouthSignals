import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent{
  @Input({required: true}) cuantity!: number;
  @Output() newCuantity = new EventEmitter();

  makeOperation(operation: string){
    switch (operation) {
      case '+':
        this.newCuantity.emit(this.cuantity + 1);
        break;

      case '-':
        this.newCuantity.emit(this.cuantity - 1);
        break;
    
      default:
        break;
    }
  }
}
