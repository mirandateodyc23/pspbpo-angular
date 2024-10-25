import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-perks',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './perks.component.html',
})
export class PerksComponent {
  constructor(private translate: TranslateService){}

}
