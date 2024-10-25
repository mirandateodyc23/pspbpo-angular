import { Component, inject, OnInit } from '@angular/core';
import { SectionComponent } from "../../shared/section/section.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [SectionComponent, TranslateModule],
  templateUrl: './company-profile.component.html',
  styleUrl: './company-profile.component.css'
})
export class CompanyProfileComponent {
  constructor(public translate: TranslateService){}

  private activatedRoute = inject(ActivatedRoute);
  
  ngOnInit() {
    setTimeout(() => {
      this.activatedRoute.fragment.subscribe((fragment: string | null) => {
        if (fragment) {
            this.jumpToSection(fragment);
          }
        });
    }, 100);
  }

  private jumpToSection(section: string | null) {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error(`Element with ID '${section}' not found.`);
      }
    } else {
      console.warn('No section provided.');
    }
  }

}
