import { TestBed } from '@angular/core/testing';
import { GetUploadedImageService } from './get-uploaded-image.service';

// This is a unit test for the GetUploadedImageService.

// The describe function defines a test suite.
describe('GetUploadedImageService', () => {
  let service: GetUploadedImageService;

  // The beforeEach function is used to set up the test environment before each test case.
  beforeEach(() => {
    // TestBed.configureTestingModule is used to configure the testing module.
    TestBed.configureTestingModule({});

    // TestBed.inject is used to inject an instance of GetUploadedImageService into the service variable.
    service = TestBed.inject(GetUploadedImageService);
  });

  // The it function defines a single test case.
  it('should be created', () => {
    // The expect function is used to assert that the service variable is truthy.
    // If the service is not null or undefined, the expectation passes.
    expect(service).toBeTruthy();
  });
});
