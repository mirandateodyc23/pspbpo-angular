import { Component, OnInit } from '@angular/core';
import { BannerCaptionComponent } from './banner-caption/banner-caption.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import { CareersComponent } from '../careers/careers.component';
import { HomeCareersComponent } from './home-careers/home-careers.component';
import { PerksComponent } from './perks/perks.component';
import { OutreachComponent } from './outreach/outreach.component';
import { ContainerRowSectionComponent } from '../../shared/container-row-section/container-row-section.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerCaptionComponent,
    AboutUsComponent,
    HomeProfileComponent,
    CareersComponent,
    HomeCareersComponent,
    PerksComponent,
    OutreachComponent,
    ContainerRowSectionComponent,
    TranslateModule
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, public translate: TranslateService){}

}
