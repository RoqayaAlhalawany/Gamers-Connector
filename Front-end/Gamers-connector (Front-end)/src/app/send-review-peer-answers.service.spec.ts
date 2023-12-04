import { TestBed } from '@angular/core/testing';

import { SendReviewPeerAnswersService } from './send-review-peer-answers.service';

// Test suite for SendReviewPeerAnswersService
describe('SendReviewPeerAnswersService', () => {
  let service: SendReviewPeerAnswersService;

  // Executed before each test case
  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configures the testing module
    service = TestBed.inject(SendReviewPeerAnswersService); // Injects SendReviewPeerAnswersService from the testing module
  });

  // Test case: should be created
  it('should be created', () => {
    expect(service).toBeTruthy(); // Expects the service to be truthy (not null or undefined)
  });
});
