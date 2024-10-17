import { Component } from '@angular/core';
import { ContainerRowSectionComponent } from "../../shared/container-row-section/container-row-section.component";
import { AccordionComponent } from '../../shared/accordion/accordion.component';
import { FaqsModel } from '../../main-content/faqs/faqs.model';
import { FaqsService } from './faqs.service';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [ContainerRowSectionComponent, AccordionComponent],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  faqsItems: FaqsModel[] = [];

  constructor(faqsService: FaqsService){
    this.faqsItems = faqsService.getFaqs();
  }

}
