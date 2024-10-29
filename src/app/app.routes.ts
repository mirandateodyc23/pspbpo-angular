import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./main-content/home/home.component').then(mod => mod.HomeComponent),
        data: {
            title: "title.home"
        }
    },
    {
        path: 'home',
        loadComponent: () => import('./main-content/home/home.component').then(mod => mod.HomeComponent),
        data: {
            title: "title.home"
        },
    },
    {
        path: 'companyprofile',
        loadComponent: () => import('./main-content/company-profile/company-profile.component').then(mod => mod.CompanyProfileComponent),
        data: {
            title: "title.company_profile"
        },
    },
    {
        path: 'careers',
        loadComponent: () => import('./main-content/careers/careers.component').then(mod => mod.CareersComponent),
        data: {
            title: "title.careers"
        },
    },
    {
        path: 'faqs',
        loadComponent: () => import('./main-content/faqs/faqs.component').then(mod => mod.FaqsComponent),
        data: {
            title: "title.faq"
        },
    },
    {
        path: 'privacy-policy',
        loadComponent: () => import('./main-content/privacy-policy/privacy-policy.component').then(mod => mod.PrivacyPolicyComponent),
        data: {
            title: "title.privacy_policy"
        },
    },
    {
        path: 'terms-of-use',
        loadComponent: () => import('./main-content/terms-of-use/terms-of-use.component').then(mod => mod.TermsOfUseComponent),
        data: {
            title: "title.terms"
        },
    },
    {
        path: 'jobs/:category/:position/:nationality',
        loadComponent: () => import('./main-content/jobs/jobs.component').then(mod => mod.JobsComponent)
    }
  ];
