import { TestBed } from '@angular/core/testing';
import { FeedService } from './feed.service';

describe('FeedService', () => {
  let service: FeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configures the testing module
    service = TestBed.inject(FeedService); // Creates an instance of the FeedService
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifies that the service is truthy, indicating it has been created successfully
  });
});
