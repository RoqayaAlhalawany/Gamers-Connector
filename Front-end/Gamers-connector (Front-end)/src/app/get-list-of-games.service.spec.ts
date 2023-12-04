import { TestBed } from '@angular/core/testing';
import { GetListOfGamesService } from './get-list-of-games.service';

// This is a unit test for the GetListOfGamesService.

// The describe function defines a test suite.
describe('GetListOfGamesService', () => {
  let service: GetListOfGamesService;

  // The beforeEach function is used to set up the test environment before each test case.
  beforeEach(() => {
    // TestBed.configureTestingModule is used to configure the testing module.
    TestBed.configureTestingModule({});

    // TestBed.inject is used to inject an instance of GetListOfGamesService into the service variable.
    service = TestBed.inject(GetListOfGamesService);
  });

  // The it function defines a single test case.
  it('should be created', () => {
    // The expect function is used to assert that the service variable is truthy.
    // If the service is not null or undefined, the expectation passes.
    expect(service).toBeTruthy();
  });
});
