import { TestBed } from '@angular/core/testing';
import { GetListOfPeersService } from './get-list-of-peers.service';

// This is a unit test for the GetListOfPeersService.

// The describe function defines a test suite.
describe('GetListOfPeersService', () => {
  let service: GetListOfPeersService;

  // The beforeEach function is used to set up the test environment before each test case.
  beforeEach(() => {
    // TestBed.configureTestingModule is used to configure the testing module.
    TestBed.configureTestingModule({});

    // TestBed.inject is used to inject an instance of GetListOfPeersService into the service variable.
    service = TestBed.inject(GetListOfPeersService);
  });

  // The it function defines a single test case.
  it('should be created', () => {
    // The expect function is used to assert that the service variable is truthy.
    // If the service is not null or undefined, the expectation passes.
    expect(service).toBeTruthy();
  });
});
