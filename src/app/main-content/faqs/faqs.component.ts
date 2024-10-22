import { Component } from '@angular/core';
import { ContainerRowSectionComponent } from "../../shared/container-row-section/container-row-section.component";
import { AccordionComponent } from '../../shared/accordion/accordion.component';
import { FaqsModel } from '../../main-content/faqs/faqs.model';
import { FaqsService } from './faqs.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [ContainerRowSectionComponent, AccordionComponent, TranslateModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  faqsItems: FaqsModel[] = [];

  constructor(faqsService: FaqsService, public translate: TranslateService){
    this.faqsItems = faqsService.getFaqs();
  }

}
