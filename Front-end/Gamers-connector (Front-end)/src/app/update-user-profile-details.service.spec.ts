import { TestBed } from '@angular/core/testing';

import { UpdateUserProfileDetailsService } from './update-user-profile-details.service';

describe('UpdateUserProfileDetailsService', () => {
  let service: UpdateUserProfileDetailsService;

  beforeEach(() => {
    // Configure the testing module and inject the UpdateUserProfileDetailsService
    TestBed.configureTestingModule({}); // Configuration for the testing module
    service = TestBed.inject(UpdateUserProfileDetailsService); // Inject the UpdateUserProfileDetailsService
  });

  it('should be created', () => {
    // Verify that the service is created
    expect(service).toBeTruthy();
  });
});
