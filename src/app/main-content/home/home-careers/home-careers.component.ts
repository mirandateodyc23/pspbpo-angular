import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-careers',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './home-careers.component.html'
})
export class HomeCareersComponent {
  constructor(private translate: TranslateService){}
}
