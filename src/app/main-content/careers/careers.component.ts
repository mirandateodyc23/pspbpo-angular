import { Component } from '@angular/core';
import { ContainerRowSectionComponent } from "../../shared/container-row-section/container-row-section.component";
import { SectionComponent } from "../../shared/section/section.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [SectionComponent, ContainerRowSectionComponent, TranslateModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  constructor(public translate: TranslateService){}

}
