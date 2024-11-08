import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCalendar, MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatOptionModule} from '@angular/material/core';
// import {MatError} from '@angular/material/core';

@Component({
  selector: 'app-stepper-resume',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,

    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatCalendar


  ],
  templateUrl: './stepper-resume.component.html',
  styleUrl: './stepper-resume.component.css'
})
export class StepperResumeComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  positionDesired!: FormGroup;
  personalInformation!: FormGroup;
  academicLanguage!: FormGroup;
  careerCharacter!: FormGroup;
  resumeImage!: FormGroup;

  formValues = {
    source: '', // Initialize with a default value if necessary
    refer: '',
    other_job_source: '',
    social_media: '',
    other_social_media: '',
    notice_period: '',
    position: '',
    nationality: '',
    salary: '',
    availability: ''
  };

  @ViewChild(MatDatepicker) datepicker!: MatDatepicker<any>;

  selectedDate: Date | null = null; // Variable to store selected date
  startDate: Date = new Date(2023, 0, 1); // Initial date when the calendar opens
  minDate: Date = new Date(2023, 0, 1);   // Minimum date the user can select
  maxDate: Date = new Date(2024, 11, 31); // Maximum date the user can select
  
  isJobSourceDisabled = false; // Control whether the select is disabled
  isSocMedDisabled = false;
  isSelectJobDisabled = false;
  isDisabledNationality = false;
  onNoticePeriodChange = false;
  selectForms = {
    sources: ['Social Media', 'JobStreet', 'Indeed', 'LinkedIn', 'Referral', 'Advertisement', 'Other'],
    socialsData: ['Facebook', 'Twitter', 'Instagram'],
    noticePeriod: ['No notice required', 'One week notice', 'Two week notice', 'One month notice', 'Three months notice', 'Negotiable notice'],
    positions: ['Social Media', 'JobStreet', 'Indeed', 'LinkedIn', 'Referral', 'Advertisement', 'Other'],
    nationalities: ["Bangladeshi", "Cambodian", "Indonesian", "Japanese", "Korean", "Malaysian/Taiwanese/Chinese (Mandarin Speaking)", "Brazil/Angolan/Portugal (Portuguese Speaking)", "Thai", "Vietnamese"]
  };

  ngOnInit() {
    this.positionDesired = this.formBuilder.group({
      source: ['', Validators.required],
      refer: [''],
      other_job_source: [''],
      social_media: [''],
      other_social_media: [''],
      position: ['', Validators.required],
      nationality: ['', Validators.required],
      notice_period: ['', Validators.required],
      salary: ['', Validators.required],
      availability: ['', Validators.required],

    });
    this.personalInformation = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.academicLanguage = this.formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    this.careerCharacter = this.formBuilder.group({
      forthCtrl: ['', Validators.required],
    });
    this.resumeImage = this.formBuilder.group({
      fifthCtrl: ['', Validators.required],
    });
  
    console.log( this.positionDesired.get('refer')?.hasError('required'));
    console.log( this.positionDesired.get('other_job_source')?.hasError('required'));
    console.log( this.positionDesired.get('social_media')?.hasError('required'));
    
  }

  onSelectionChange(source: MatSelectChange) {
    // Handle selection change
    console.log("Selected source:", source.value);
  }

  onSalaryChange(salary: MatSelectChange) {
    console.log("Selected source:", salary.value);
  }

  closeDatepicker = () => {
    console.log("CLOSED:");
    this.datepicker.close();
  };

  openDatepicker() {
    console.log("OPENED");
    this.datepicker.open();
  }

}
