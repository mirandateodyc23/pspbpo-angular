import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CareersComponent } from '../careers/careers.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [HomeComponent, CompanyProfileComponent, CareersComponent, FaqsComponent, ContactUsComponent],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent {

}
