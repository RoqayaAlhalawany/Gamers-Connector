import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AcceptDeclinePayload } from "./others-profile/accept-decline.payload";

@Injectable({
  providedIn: 'root'
})
export class UnpeerService {

  constructor(private _httpClient: HttpClient) { }

  // Method to unpeer a user
  unPeer(username: string) {
    // Construct the URL for the unpeer API endpoint
    let url = 'http://localhost:8080/api/unpeer/' + username;

    // Send an HTTP POST request to the URL with an empty object as the request payload
    // Set the response type to 'text' to treat the response as plain text
    return this._httpClient.post(url, {}, { responseType: 'text' });
  }
}
