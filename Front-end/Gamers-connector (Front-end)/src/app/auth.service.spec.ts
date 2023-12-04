import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService; // Declare a variable to hold the instance of the service

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Create a test bed and configure it
    service = TestBed.inject(AuthService); // Inject an instance of the service
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Perform a test to check if the service instance exists
  });
});
