import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UsersComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {}
