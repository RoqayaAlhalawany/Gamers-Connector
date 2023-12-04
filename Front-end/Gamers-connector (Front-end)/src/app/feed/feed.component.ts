import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  batch = 2; // Number of items to load per batch
  lastKey = ''; // Last key used for pagination
  finished = false; // Flag to indicate if all items have been loaded

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    // Component initialization code goes here
  }

  onScroll() {
    console.log('Scrolled!'); // Log a message when scrolling occurs
  }
}
