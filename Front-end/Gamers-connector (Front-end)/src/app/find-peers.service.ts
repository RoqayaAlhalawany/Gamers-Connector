import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FindPeersService {
  constructor(private _httpClient: HttpClient) { }

  findPeersList(gameName: string): Observable<any> {
    // This method sends an HTTP GET request to the specified URL with the provided gameName as a header.
    return this._httpClient.get('http://localhost:8080/api/findPeers', { headers: new HttpHeaders({ "gameName": gameName }) });
  }
}
