import { TestBed } from '@angular/core/testing';

import { FindPeersService } from './find-peers.service';

describe('FindPeersService', () => {
  let service: FindPeersService;

  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({});

    // Inject the FindPeersService
    service = TestBed.inject(FindPeersService);
  });

  it('should be created', () => {
    // Check if the FindPeersService is truthy
    expect(service).toBeTruthy();
  });
});
