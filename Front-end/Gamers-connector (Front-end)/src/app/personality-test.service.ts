import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PersonalityTestRequestPayload } from "./personality-test/personality-test-request.payload";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonalityTestService {

  constructor(private _httpClient: HttpClient) {}

  // Sends the personality test answers to the server
  sendPersonalityTestAnswers(ptPayloadAnswers: PersonalityTestRequestPayload[], userName: string): Observable<any> {
    // Construct the URL for the API endpoint
    let url: string = 'http://localhost:8080/api/personalityTest/' + userName;

    // Send a POST request to the server with the payload and specify the response type as text
    return this._httpClient.post(url, ptPayloadAnswers, { responseType: 'text' });
  }

  // Retrieves the personality test questions from the server
  getPersonalityTestQuestions(): Observable<any> {
    // Send a GET request to the server to retrieve the personality test questions
    return this._httpClient.get("http://localhost:8080/api/personalityTest/");
  }
}
