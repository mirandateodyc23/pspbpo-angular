import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-outreach',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './outreach.component.html',
})
export class OutreachComponent {
  constructor(private translate: TranslateService) {}
}
