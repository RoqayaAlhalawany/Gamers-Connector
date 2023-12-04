import { TestBed } from '@angular/core/testing';

import { RequestInterceptor } from './request.interceptor';

describe('RequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RequestInterceptor  // Inject the RequestInterceptor as a provider
    ]
  }));

  it('should be created', () => {
    const interceptor: RequestInterceptor = TestBed.inject(RequestInterceptor);  // Retrieve an instance of RequestInterceptor
    expect(interceptor).toBeTruthy();  // Check if the interceptor instance is truthy
  });
});
