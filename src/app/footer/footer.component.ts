import { Component, Input } from '@angular/core';
import { OutreachComponent } from '../main-content/home/outreach/outreach.component';
import { ContainerRowSectionComponent } from '../shared/container-row-section/container-row-section.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [OutreachComponent, ContainerRowSectionComponent, TranslateModule, RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  year = new Date().getFullYear();
  
  constructor(public translate : TranslateService, private router: Router, private activatedRoute: ActivatedRoute){}
}
