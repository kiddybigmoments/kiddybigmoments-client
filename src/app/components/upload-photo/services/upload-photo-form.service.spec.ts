import { TestBed, inject } from '@angular/core/testing'

import { UploadPhotoFormService } from './upload-photo-form.service'

describe('UploadPhotoFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadPhotoFormService]
    })
  })

  it(
    'should be created',
    inject([UploadPhotoFormService], (service: UploadPhotoFormService) => {
      expect(service).toBeTruthy()
    })
  )
})
