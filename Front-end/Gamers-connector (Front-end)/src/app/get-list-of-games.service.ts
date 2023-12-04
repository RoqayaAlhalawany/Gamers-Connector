import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetListOfGamesService {
  constructor(private _httpClient: HttpClient) { }

  getListOfAvailableGames(): Observable<any> {
    // This method sends an HTTP GET request to the specified URL to retrieve the list of available games.
    return this._httpClient.get('http://localhost:8080/api/games');
  }
}
