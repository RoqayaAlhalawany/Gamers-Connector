import { TestBed } from '@angular/core/testing';

import { SignupGuardPersonalityService } from './signup-guard-personality.service';

// Test suite for SignupGuardPersonalityService
describe('SignupGuardPersonalityService', () => {
  let service: SignupGuardPersonalityService;

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuring the testing module

    // Injecting SignupGuardPersonalityService from the testing module
    service = TestBed.inject(SignupGuardPersonalityService);
  });

  // Test case: Checking if SignupGuardPersonalityService is created
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
