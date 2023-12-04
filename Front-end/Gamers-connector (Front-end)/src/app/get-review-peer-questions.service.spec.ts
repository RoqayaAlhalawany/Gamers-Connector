import { TestBed } from '@angular/core/testing';
import { GetReviewPeerQuestionsService } from './get-review-peer-questions.service';

// This is a unit test for the GetReviewPeerQuestionsService.

// The describe function defines a test suite.
describe('GetReviewPeerQuestionsService', () => {
  let service: GetReviewPeerQuestionsService;

  // The beforeEach function is used to set up the test environment before each test case.
  beforeEach(() => {
    // TestBed.configureTestingModule is used to configure the testing module.
    TestBed.configureTestingModule({});

    // TestBed.inject is used to inject an instance of GetReviewPeerQuestionsService into the service variable.
    service = TestBed.inject(GetReviewPeerQuestionsService);
  });

  // The it function defines a single test case.
  it('should be created', () => {
    // The expect function is used to assert that the service variable is truthy.
    // If the service is not null or undefined, the expectation passes.
    expect(service).toBeTruthy();
  });
});
