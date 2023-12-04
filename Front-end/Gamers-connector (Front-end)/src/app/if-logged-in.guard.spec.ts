import { TestBed } from '@angular/core/testing';
import { IfLoggedInGuard } from './if-logged-in.guard';

// This is a unit test for the IfLoggedInGuard.

// The describe function defines a test suite.
describe('IfLoggedInGuard', () => {
  let guard: IfLoggedInGuard;

  // The beforeEach function is used to set up the test environment before each test case.
  beforeEach(() => {
    // TestBed.configureTestingModule is used to configure the testing module.
    TestBed.configureTestingModule({});

    // TestBed.inject is used to inject an instance of IfLoggedInGuard into the guard variable.
    guard = TestBed.inject(IfLoggedInGuard);
  });

  // The it function defines a single test case.
  it('should be created', () => {
    // The expect function is used to assert that the guard variable is truthy.
    // If the guard is not null or undefined, the expectation passes.
    expect(guard).toBeTruthy();
  });
});
