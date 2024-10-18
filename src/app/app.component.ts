import { ChangeDetectionStrategy, Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./main-content/home/home.component";

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['bm', 'cn','id', 'th','vn', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('th');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  title = 'Pacific Sea BPO Services, Ltd.';

}
