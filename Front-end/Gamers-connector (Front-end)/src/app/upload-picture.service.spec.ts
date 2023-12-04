import { TestBed } from '@angular/core/testing';

import { UploadPictureService } from './upload-picture.service';

describe('UploadPictureService', () => {
  let service: UploadPictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // Inject the UploadPictureService into the test bed
    service = TestBed.inject(UploadPictureService);
  });

  it('should be created', () => {
    // Assert that the service is truthy, indicating that it has been successfully created
    expect(service).toBeTruthy();
  });
});
