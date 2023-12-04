import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { feedResponsePayload } from "./feed/feed-response.payload";

@Injectable({
  providedIn: 'root'
})
export class FeedService implements OnInit {

  allFeed: Object; // Consider providing a type for the 'allFeed' property

  constructor(private _httpClient: HttpClient) {
    this.allFeed = {
      text: '',
      images: [],
      videos: []
    };
  }

  ngOnInit() {
    // 'ngOnInit' is typically used in components, not in services
  }

  getFeedResponse(batch: any, lastKey?: any) {

    let query = {
      orderByKey: true,
      limitToFirst: batch,
    };

    if (lastKey) { // @ts-ignore
      query['startAt'] = lastKey
    }

    this._httpClient.get("http://localhost:8080/api/post/feed").subscribe(data => {
      this.allFeed = data; // Assign the response data to the 'allFeed' property
    });
  }
}
