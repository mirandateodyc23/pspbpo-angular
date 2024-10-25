import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent {

  constructor(private translate: TranslateService){}

}
