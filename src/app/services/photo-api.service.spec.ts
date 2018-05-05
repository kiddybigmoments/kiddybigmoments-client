import { TestBed, inject } from '@angular/core/testing'

import { PhotoApiService } from './photo-api.service'

describe('PhotoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoApiService]
    })
  })

  it(
    'should be created',
    inject([PhotoApiService], (service: PhotoApiService) => {
      expect(service).toBeTruthy()
    })
  )
})
