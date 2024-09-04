import { Component, EventEmitter, input, Input, model, output, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  // @Input({ required: true }) size?: {width: string, height: string}; // Custom 2 way binding for size property
  // @Output() sizeChange = new EventEmitter(); // Custom 2 way binding for size property
  
  size = model.required<{width: string, height: string}>();

  onReset() {
    this.size.set({
      width: '200',
      height: '100'
    });
  }
}
