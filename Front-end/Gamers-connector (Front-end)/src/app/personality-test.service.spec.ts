import { TestBed } from '@angular/core/testing';

import { PersonalityTestService } from './personality-test.service';

describe('PersonalityTestService', () => {
  let service: PersonalityTestService;

  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({});

    // Inject the PersonalityTestService
    service = TestBed.inject(PersonalityTestService);
  });

  it('should be created', () => {
    // Check if the PersonalityTestService is truthy
    expect(service).toBeTruthy();
  });
});
