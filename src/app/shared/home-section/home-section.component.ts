import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css'
})
export class HomeSectionComponent {
  @Input() id_name: string = ""; 
  @Input() class_name: string = "";
}
