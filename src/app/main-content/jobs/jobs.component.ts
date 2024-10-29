import { Component, DestroyRef, inject, Input, input, OnInit } from '@angular/core';
import { ContainerRowSectionComponent } from "../../shared/container-row-section/container-row-section.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [ContainerRowSectionComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit{
  @Input() category: string = "";
  @Input() position: string = "";
  @Input() nationality: string = "";

  private destroyRef = inject(DestroyRef);

  constructor(private route: ActivatedRoute){
    console.log(this.category, this.position, this.nationality);
  }

  ngOnInit() {
      const subscription = this.route.params.subscribe(params => {
        this.category = params['category'];
        this.position = params['position'];
        this.nationality = params['nationality'];
        console.log(this.category, this.position, this.nationality);
      });
      this.destroyRef.onDestroy(() => subscription.unsubscribe());

        // this.category = this.route.snapshot.params['category'];
        // this.position = this.route.snapshot.params['position'];
        // this.nationality = this.route.snapshot.params['nationality'];
        // console.log(this.category, this.position, this.nationality);

  }


}
