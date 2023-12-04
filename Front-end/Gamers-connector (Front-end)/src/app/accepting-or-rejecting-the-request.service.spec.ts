import { TestBed } from '@angular/core/testing';

import { AcceptingOrRejectingTheRequestService } from './accepting-or-rejecting-the-request.service';

describe('AcceptingOrRejectingTheRequestService', () => {
  let service: AcceptingOrRejectingTheRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuring the testing module
    service = TestBed.inject(AcceptingOrRejectingTheRequestService); // Injecting the service
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Checking if the service is created
  });
});
