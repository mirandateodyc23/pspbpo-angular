import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-row-section',
  standalone: true,
  imports: [],
  templateUrl: './container-row-section.component.html',
  styleUrl: './container-row-section.component.css'
})
export class ContainerRowSectionComponent {
  @Input() idname: string = ""; 
  @Input() classname: string = "";

  constructor() {}

  
}
