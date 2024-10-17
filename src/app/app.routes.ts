import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./main-content/home/home.component').then(mod => mod.HomeComponent),
        title: 'Pacific Sea BPO Services, Ltd.',
    },
    {
        path: 'home',
        loadComponent: () => import('./main-content/home/home.component').then(mod => mod.HomeComponent),
        title: 'Pacific Sea BPO Services, Ltd.',
    },
    {
        path: 'companyprofile',
        loadComponent: () => import('./main-content/company-profile/company-profile.component').then(mod => mod.CompanyProfileComponent),
        title: 'Company Profile - Pacific Sea BPO Services, Ltd.',
    },
    {
        path: 'careers',
        loadComponent: () => import('./main-content/careers/careers.component').then(mod => mod.CareersComponent),
        title: 'Careers - Pacific Sea BPO Services, Ltd.',
    },
    {
        path: 'faqs',
        loadComponent: () => import('./main-content/faqs/faqs.component').then(mod => mod.FaqsComponent),
        title: 'FAQs - Pacific Sea BPO Services, Ltd.',
    }
  ];
