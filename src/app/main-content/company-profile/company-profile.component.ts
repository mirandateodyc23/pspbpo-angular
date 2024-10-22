import { Component } from '@angular/core';
import { SectionComponent } from "../../shared/section/section.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [SectionComponent, TranslateModule],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent {
  constructor(public translate: TranslateService){}

}
