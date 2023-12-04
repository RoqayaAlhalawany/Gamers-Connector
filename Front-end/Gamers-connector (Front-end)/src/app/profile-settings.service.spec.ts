import { TestBed } from '@angular/core/testing';

import { ProfileSettingsService } from './profile-settings.service';

describe('ProfileSettingsService', () => {
  let service: ProfileSettingsService;

  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({});

    // Inject the ProfileSettingsService
    service = TestBed.inject(ProfileSettingsService);
  });

  it('should be created', () => {
    // Check if the ProfileSettingsService is truthy
    expect(service).toBeTruthy();
  });
});
