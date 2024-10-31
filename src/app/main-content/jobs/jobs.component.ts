import {
  Component,
  DestroyRef,
  inject,
  Input,
  input,
  OnInit,
} from '@angular/core';
import { ContainerRowSectionComponent } from '../../shared/container-row-section/container-row-section.component';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [ContainerRowSectionComponent, TranslateModule, CommonModule],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css',
})
export class JobsComponent implements OnInit {
  @Input() category: string = '';
  @Input() position: string = '';
  @Input() nationality: string = '';

  private destroyRef = inject(DestroyRef);
  jobContent?: {
    id: string;
    dept_no: number;
    dept: string;
    title: string;
    market: string;
    slug: string;
    responsibilities: [];
    requirements: [];
    other_requirements: [];
    educational_background: [];
  };

  marketList: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    const subscription = this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.position = params['position'];
      this.nationality = params['nationality'];
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());

    this.getJobListDetails();
  }

  getJobListDetails() {
    this.translate.get('jobs.contents').subscribe((contents: {category: string, job_lists: [] }[]) => {
      // Filter contents by category
      const filteredContents = contents.filter((content) => content.category === this.category.toUpperCase());

      // Check if there are any filtered contents
      filteredContents.map(lists => {
        const joblist = lists.job_lists;
        joblist.filter(
            (job: {
              id: string;
              dept_no: number;
              dept: string;
              title: string;
              market: string;
              slug: string;
              responsibilities: [];
              requirements: [];
              other_requirements: [];
              educational_background: [];
            }) => job.slug === this.position
          )
          .map((job) => {
            this.jobContent = job;
          });
      });

      this.marketList =
        this.jobContent?.market.split(',').map((m: string) => m.trim()) || [];
    });
  }
}
