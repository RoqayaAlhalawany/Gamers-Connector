import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequestPayload } from './login-request.payload';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginPayload: LoginRequestPayload; // Login payload object to store username/email and password
  errorMessage: string; // Error message to display in case of login failure

  constructor(private router: Router, private authService: AuthService) {
    // Initialize login payload and error message
    this.loginPayload = {
      usernameOrEmail: '',
      password: '',
    };
    this.errorMessage = '';
  }

  loginForm = new FormGroup({
    // Create form controls for email and password fields
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {}

  submitLoginForm(loginForm: FormGroup) {
    // Method called when login form is submitted
    this.loginPayload.usernameOrEmail = this.loginForm.get('email')?.value; // Get entered email
    this.loginPayload.password = this.loginForm.get('password')?.value; // Get entered password

    this.authService.signIn(this.loginPayload).subscribe(
      // Call signIn method of AuthService to authenticate user
      (data) => {
        console.log('Login successful');
        localStorage.setItem('token', data.sessionId); // Store session ID in local storage
        console.log(data);
        this.router.navigate(['/profile']); // Redirect to the profile page
      },
      (error) => {
        this.errorMessage = 'Email or password might be wrong'; // Set error message in case of login failure
      }
    );
  }
}
