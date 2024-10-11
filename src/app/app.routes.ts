import { Routes } from '@angular/router';
import { HomeComponent } from './main-content/home/home.component';
import { CompanyProfileComponent } from './main-content/company-profile/company-profile.component';
import { CareersComponent } from './main-content/careers/careers.component';
import { FaqsComponent } from './main-content/faqs/faqs.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
      path: 'companyprofile',
      component: CompanyProfileComponent
    },
    {
        path: 'careers',
        component: CareersComponent
    },
    {
        path: 'faqs',
        component: FaqsComponent
    }
  ];
