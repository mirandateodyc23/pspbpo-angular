import { Component } from '@angular/core';
import { ContainerRowSectionComponent } from "../../shared/container-row-section/container-row-section.component";
import { SectionComponent } from "../../shared/section/section.component";

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [SectionComponent, ContainerRowSectionComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

}
