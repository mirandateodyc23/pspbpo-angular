import { Component } from '@angular/core';
import { OutreachComponent } from '../main-content/home/outreach/outreach.component';
import { ContainerRowSectionComponent } from '../shared/container-row-section/container-row-section.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [OutreachComponent, ContainerRowSectionComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
