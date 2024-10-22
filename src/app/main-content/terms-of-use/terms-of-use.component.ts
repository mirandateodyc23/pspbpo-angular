import { Component } from '@angular/core';
import { SectionComponent } from '../../shared/section/section.component';
import { ContainerRowSectionComponent } from '../../shared/container-row-section/container-row-section.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-term-of-use',
  standalone: true,
  imports: [ContainerRowSectionComponent, TranslateModule],
  templateUrl: './terms-of-use.component.html',
  styleUrl: './terms-of-use.component.css'
})
export class TermsOfUseComponent {
  constructor(public translate: TranslateService){}

}
