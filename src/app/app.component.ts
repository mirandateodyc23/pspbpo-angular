import { ChangeDetectionStrategy, Component, DestroyRef, inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
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
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  
  title: string = '';
  loadedLang: string = 'en';

  constructor(public translate: TranslateService) {
    this.loadLanguage();
    this.translate.addLangs(['bm', 'cn','id', 'th','vn', 'en']);
    this.translate.setDefaultLang(this.loadedLang);
    this.translate.use(this.loadedLang);
  }

  ngOnInit() {
    const subscription = this.router.events.subscribe(() => {
      const route = this.activatedRoute.root; // Get the root activated route
      this.getTitle(route);
      this.destroyRef.onDestroy(subscription.unsubscribe);
    });
  }

  private getTitle(route: ActivatedRoute) {
    // Traverse the activated route tree to find the title
    while (route.firstChild) {
      route = route.firstChild;
    }
    this.title = route.snapshot.data['title']; // Set the title

  }

  switchLang(lang: string) {
    this.useLanguage(lang);
  }

  loadLanguage(){
    this.loadedLang = localStorage.getItem('lang') || 'en';
  }

  useLanguage(lang: string){
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
  
}
