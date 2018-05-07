import { TestBed, inject } from '@angular/core/testing'

import { AddKidService } from './add-kid-form.service'

describe('AddKidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddKidService]
    })
  })

  it(
    'should be created',
    inject([AddKidService], (service: AddKidService) => {
      expect(service).toBeTruthy()
    })
  )
})
