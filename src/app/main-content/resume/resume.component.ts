import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  constructor(private translate: TranslateService, private route : ActivatedRoute){}
  private category : string = "";
  private position : string = "";
  private nationality : string = "";
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.position = params['position'];
      this.nationality = params['nationality'];
    });
    this.destroyRef.onDestroy(() => subscription.unsubscribe());

    console.log(this.category, this.position, this.nationality);
  }



}
