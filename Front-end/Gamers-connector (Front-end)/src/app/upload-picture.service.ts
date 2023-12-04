import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadPictureService {

  constructor(private _httpClient: HttpClient) { }

  // Uploads a photo using HTTP PUT request
  UploadPhoto(photo: any): Observable<any> {
    // Sends a PUT request to the specified URL with the provided photo data
    // The server is expected to respond with a text response
    return this._httpClient.put('http://localhost:8080/api/profile/profilePic', photo, { responseType: 'text' });
  }
}
