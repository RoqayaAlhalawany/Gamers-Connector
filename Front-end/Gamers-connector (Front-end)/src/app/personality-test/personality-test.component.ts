import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalityTestRequestPayload } from "./personality-test-request.payload";
import { PersonalityTestService } from "../personality-test.service";

@Component({
  selector: 'app-personality-test',
  templateUrl: './personality-test.component.html',
  styleUrls: ['./personality-test.component.scss']
})
export class PersonalityTestComponent implements OnInit {
  // Array to store personality test answers payload
  ptAnswersPayload: PersonalityTestRequestPayload[];
  // User name
  userName: string;
  // Current step of the personality test
  step: any = 1;
  // Flag to indicate whether to display span for invalid form
  forTheSpan: boolean = false;
  // Flag to indicate whether the form has been submitted
  submitted: any = false;
  // Multistep form group to hold the form controls for each page
  multistep = new FormGroup({
    Page1: new FormGroup({
      // FormControl for each question in Page 1 with required validator
      q1: new FormControl(null, [Validators.required]),
      q2: new FormControl(null, [Validators.required]),
      q3: new FormControl(null, [Validators.required]),
      q4: new FormControl(null, [Validators.required]),
      q5: new FormControl(null, [Validators.required]),
      q6: new FormControl(null, [Validators.required]),
      q7: new FormControl(null, [Validators.required]),
      q8: new FormControl(null, [Validators.required]),
      q9: new FormControl(null, [Validators.required]),
    }),
    Page2: new FormGroup({
      // FormControl for each question in Page 2 with required validator
      q10: new FormControl(null, [Validators.required]),
      q11: new FormControl(null, [Validators.required]),
      q12: new FormControl(null, [Validators.required]),
      q13: new FormControl(null, [Validators.required]),
      q14: new FormControl(null, [Validators.required]),
      q15: new FormControl(null, [Validators.required]),
      q16: new FormControl(null, [Validators.required]),
      q17: new FormControl(null, [Validators.required]),
      q18: new FormControl(null, [Validators.required]),
    }),
    Page3: new FormGroup({
      // FormControl for each question in Page 3 with required validator
      q19: new FormControl(null, [Validators.required]),
      q20: new FormControl(null, [Validators.required]),
      q21: new FormControl(null, [Validators.required]),
      q22: new FormControl(null, [Validators.required]),
      q23: new FormControl(null, [Validators.required]),
      q24: new FormControl(null, [Validators.required]),
      q25: new FormControl(null, [Validators.required]),
      q26: new FormControl(null, [Validators.required]),
      q27: new FormControl(null, [Validators.required])
    })
  });

  constructor(
    private ptAnswersService: PersonalityTestService,
    private ptQuestionsService: PersonalityTestService,
    private router: Router,
    private actvRoute: ActivatedRoute
  ) {
    // Initialize ptAnswersPayload array and userName
    this.ptAnswersPayload = [];
    this.userName = '';
  }

  ngOnInit(): void {
    // Get the username from the route parameters
    this.userName = this.actvRoute.snapshot.params['username'];
  }

  // Getter for Page1 form controls
  get Page1() {
    // @ts-ignore
    return this.multistep.controls['Page1']['controls'];
  }

  // Getter for Page2 form controls
  get Page2() {
    // @ts-ignore
    return this.multistep.controls['Page2']['controls'];
  }

  // Getter for Page3 form controls
  get Page3() {
    // @ts-ignore
    return this.multistep.controls['Page3']['controls'];
  }

  // Submit the form
  submit() {
    this.submitted = true;
    // Check for invalid form on each page and prevent progress if invalid
    if (this.multistep.controls['Page1'].invalid && this.step === 1) {
      this.forTheSpan = true;
      return;
    }
    if (this.multistep.controls['Page2'].invalid && this.step === 2) {
      this.forTheSpan = true;
      return;
    }
    if (this.multistep.controls['Page3'].invalid && this.step === 3) {
      this.forTheSpan = true;
      return;
    }
    // Reset the flag and move to the next step
    this.forTheSpan = false;
    this.step = this.step + 1;
    if (this.step === 4) {
      this.submitPersonalityTestAnswers();
    }
  }

  // Go to the previous step
  previous() {
    this.forTheSpan = false;
    this.step = this.step - 1;
  }

  // Submit the personality test answers
  submitPersonalityTestAnswers() {
    // Push the answers from each page into the ptAnswersPayload array
    this.ptAnswersPayload.push({ id: 1, answer: this.Page1.q1.value });
    this.ptAnswersPayload.push({ id: 2, answer: this.Page1.q2.value });
    this.ptAnswersPayload.push({ id: 3, answer: this.Page1.q3.value });
    this.ptAnswersPayload.push({ id: 4, answer: this.Page1.q4.value });
    this.ptAnswersPayload.push({ id: 5, answer: this.Page1.q5.value });
    this.ptAnswersPayload.push({ id: 6, answer: this.Page1.q6.value });
    this.ptAnswersPayload.push({ id: 7, answer: this.Page1.q7.value });
    this.ptAnswersPayload.push({ id: 8, answer: this.Page1.q8.value });
    this.ptAnswersPayload.push({ id: 9, answer: this.Page1.q9.value });
    this.ptAnswersPayload.push({ id: 10, answer: this.Page2.q10.value });
    this.ptAnswersPayload.push({ id: 11, answer: this.Page2.q11.value });
    this.ptAnswersPayload.push({ id: 12, answer: this.Page2.q12.value });
    this.ptAnswersPayload.push({ id: 13, answer: this.Page2.q13.value });
    this.ptAnswersPayload.push({ id: 14, answer: this.Page2.q14.value });
    this.ptAnswersPayload.push({ id: 15, answer: this.Page2.q15.value });
    this.ptAnswersPayload.push({ id: 16, answer: this.Page2.q16.value });
    this.ptAnswersPayload.push({ id: 17, answer: this.Page2.q17.value });
    this.ptAnswersPayload.push({ id: 18, answer: this.Page2.q18.value });
    this.ptAnswersPayload.push({ id: 19, answer: this.Page3.q19.value });
    this.ptAnswersPayload.push({ id: 20, answer: this.Page3.q20.value });
    this.ptAnswersPayload.push({ id: 21, answer: this.Page3.q21.value });
    this.ptAnswersPayload.push({ id: 22, answer: this.Page3.q22.value });
    this.ptAnswersPayload.push({ id: 23, answer: this.Page3.q23.value });
    this.ptAnswersPayload.push({ id: 24, answer: this.Page3.q24.value });
    this.ptAnswersPayload.push({ id: 25, answer: this.Page3.q25.value });
    this.ptAnswersPayload.push({ id: 26, answer: this.Page3.q26.value });
    this.ptAnswersPayload.push({ id: 27, answer: this.Page3.q27.value });

    // Log the ptAnswersPayload array
    console.log(this.ptAnswersPayload);

    // Log the userName
    console.log(this.userName);

    // Send the personality test answers to the server
    this.ptAnswersService.sendPersonalityTestAnswers(this.ptAnswersPayload, this.userName).subscribe(data => {
      console.log("Answers submitted successfully");
      // Navigate to the login page after submitting the answers
      this.router.navigate(['/login']);
    });

    // Retrieve the personality test questions from the server
    this.ptQuestionsService.getPersonalityTestQuestions().subscribe(data => {
      // Remove the 'userSignedUp' item from the local storage
      localStorage.removeItem('userSignedUp');
      console.log(data);
    });
  }
}
