import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-banner-caption',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './banner-caption.component.html',
  styleUrl: './banner-caption.component.css'
})
export class BannerCaptionComponent {
  constructor(private translate: TranslateService){}

}
