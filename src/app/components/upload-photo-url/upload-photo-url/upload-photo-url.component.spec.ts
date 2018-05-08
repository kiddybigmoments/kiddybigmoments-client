import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UploadPhotoUrlComponent } from './upload-photo-url.component'

describe('UploadPhotoUrlComponent', () => {
  let component: UploadPhotoUrlComponent
  let fixture: ComponentFixture<UploadPhotoUrlComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadPhotoUrlComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPhotoUrlComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
