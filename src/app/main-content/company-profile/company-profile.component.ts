import { Component } from '@angular/core';
import { SectionComponent } from "../../shared/section/section.component";

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent {

}
