import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dasboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dasboard-item.component.html',
  styleUrl: './dasboard-item.component.css'
})
export class DasboardItemComponent {

  // @Input({ required: true }) image!: { src: string; alt: string };
  // @Input({ required: true }) title!: string;

  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();

}
