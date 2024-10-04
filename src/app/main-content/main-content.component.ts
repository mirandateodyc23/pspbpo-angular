import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CareersComponent } from './careers/careers.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HomeComponent,
    CompanyProfileComponent,
    CareersComponent,
    FaqsComponent,
    ContactUsComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrls: [
    './main-content.component.css', 
  ],

})
export class MainContentComponent {}
