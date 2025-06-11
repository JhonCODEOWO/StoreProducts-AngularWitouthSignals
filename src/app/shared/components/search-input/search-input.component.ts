import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  @Output() searchQuery = new EventEmitter<string>();
  @Input() placeholder = '';

  sendQuery(query: string){
    console.log(query);
    this.searchQuery.emit(query);
  }
}
