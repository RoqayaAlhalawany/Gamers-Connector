import { TestBed } from '@angular/core/testing';

import { ReviewGuardGuard } from './review-guard.guard';

// Test suite for ReviewGuardGuard
describe('ReviewGuardGuard', () => {
  let guard: ReviewGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configure the testing module

    // Obtain an instance of ReviewGuardGuard
    guard = TestBed.inject(ReviewGuardGuard);
  });

  // Test case: should be created
  it('should be created', () => {
    expect(guard).toBeTruthy(); // Assert that the guard instance is truthy
  });
});
