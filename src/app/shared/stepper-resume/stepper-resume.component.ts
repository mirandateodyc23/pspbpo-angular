import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
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
    // MatOptionModule
  ],
  templateUrl: './stepper-resume.component.html',
  styleUrl: './stepper-resume.component.css'
})
export class StepperResumeComponent implements OnInit{
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
    notice_period: '',

  };

  validator = {
    source: {
      $errors: ['This field is required'] // Replace with your actual validation logic
    },
    refer: {
      $errors: ['This field is required'] // Replace with your actual validation logic
    },
    other_job_source : {
      $errors: ['This field is required'] // Replace with your actual validation logic
    },
  };

  isJobSourceDisabled = false; // Control whether the select is disabled
  isSocMedDisabled = false;
  isSelectJobDisabled = false;
  isDisabledNationality = false;
  onNoticePeriodChange = false;
  selectForms = {
    sources: ['Social Media', 'JobStreet', 'Indeed', 'LinkedIn', 'Referral', 'Advertisement', 'Other'],
    socialsData: ['Facebook', 'Twitter', 'Instagram'],
    noticePeriod: ['No notice required', 'One week notice', 'Two week notice', 'One month notice', 'Three months notice', 'Negotiable notice']
  };

  ngOnInit() {
    this.positionDesired = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
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
  
    console.log(this.positionDesired);
  }

  onSelectionChange(source: MatSelectChange) {
    // Handle selection change
    console.log("Selected source:", source.value);
  }

  onSalaryChange(salary: MatSelectChange) {
    console.log("Selected source:", salary.value);
  }

}
