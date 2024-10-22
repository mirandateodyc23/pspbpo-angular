import { Component } from '@angular/core';
import { SectionComponent } from '../../shared/section/section.component';
import { ContainerRowSectionComponent } from '../../shared/container-row-section/container-row-section.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [ContainerRowSectionComponent, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {
  constructor(public translate: TranslateService){}

}
