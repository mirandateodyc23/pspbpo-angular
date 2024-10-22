import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() changeLang = new EventEmitter();

  constructor(public translate: TranslateService){}

  changeLanguage(lang: string) {
    this.changeLang.emit(lang);
  }

}
