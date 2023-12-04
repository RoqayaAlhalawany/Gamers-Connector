import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetListOfPeersService {
  constructor(private _httpClient: HttpClient) { }

  fetchPeersList(): Observable<any> {
    // This method sends an HTTP GET request to the specified URL to fetch the list of peers.
    return this._httpClient.get('http://localhost:8080/api/peers');
  }
}
