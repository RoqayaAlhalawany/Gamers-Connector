import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetUploadedImageService {

  constructor(private _httpClient: HttpClient) { }

  getUploadedImage(url: string): Observable<any> {
    // This method sends an HTTP GET request to the specified URL to get the uploaded image.
    // The {responseType: 'blob'} option is used to indicate that the response should be treated as a Blob object.
    return this._httpClient.get(url, { responseType: 'blob' });
  }
}
