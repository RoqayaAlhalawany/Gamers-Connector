// Import the necessary dependencies
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddGamePayload } from './add-game/add-game.payload';

@Injectable({
  providedIn: 'root'
})
export class AddGameService {

  constructor(private _httpClient: HttpClient) { }

  // Method to add a game with handle
  addGameWithHandle(addGamePayload: AddGamePayload): Observable<any> {
    // Make a POST request to the specified endpoint, passing the addGamePayload
    // The server is expected to respond with a text response
    return this._httpClient.post('http://localhost:8080/api/addGame', addGamePayload, { responseType: 'text' });
  }
}
