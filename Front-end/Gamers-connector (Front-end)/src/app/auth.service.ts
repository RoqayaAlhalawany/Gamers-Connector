import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterRequestPayload } from './register/register-request.payload';
import { LoginRequestPayload } from './login/login-request.payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  register(registerPayload: RegisterRequestPayload): Observable<any> {
    // Send a POST request to the server to register a new user
    return this._httpClient.post('http://localhost:8080/api/auth/signup', registerPayload, { responseType: 'text' });
  }

  isUserSignedUp() {
    // Check if the user is signed up by retrieving the value from local storage
    let user = localStorage.getItem('userSignedUp');
    return user;
  }

  signIn(loginPayload: LoginRequestPayload): Observable<any> {
    // Send a POST request to the server to authenticate the user
    return this._httpClient.post('http://localhost:8080/api/auth/signin', loginPayload);
  }

  isUserLoggedIn() {
    // Check if the user is logged in by retrieving the value from local storage
    let user = localStorage.getItem('token');
    return user;
  }

  logOut() {
    // Remove the token from local storage to log out the user
    localStorage.removeItem('token');
  }
}
