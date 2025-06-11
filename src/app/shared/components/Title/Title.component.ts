import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './Title.component.html',
})
export class TitleComponent {
  @Input({required: true}) title!: string;
}
