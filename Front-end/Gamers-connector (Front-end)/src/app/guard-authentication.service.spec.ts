import { TestBed } from '@angular/core/testing';
import { GuardAuthenticationService } from './guard-authentication.service';

// This is a unit test for the GuardAuthenticationService.

// The describe function defines a test suite.
describe('GuardAuthenticationService', () => {
  let service: GuardAuthenticationService;

  // The beforeEach function is used to set up the test environment before each test case.
  beforeEach(() => {
    // TestBed.configureTestingModule is used to configure the testing module.
    TestBed.configureTestingModule({});

    // TestBed.inject is used to inject an instance of GuardAuthenticationService into the service variable.
    service = TestBed.inject(GuardAuthenticationService);
  });

  // The it function defines a single test case.
  it('should be created', () => {
    // The expect function is used to assert that the service variable is truthy.
    // If the service is not null or undefined, the expectation passes.
    expect(service).toBeTruthy();
  });
});
