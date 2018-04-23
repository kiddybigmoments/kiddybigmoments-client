import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PhotoViewComponentComponent } from './photo-view-component.component'

describe('PhotoViewComponentComponent', () => {
  let component: PhotoViewComponentComponent
  let fixture: ComponentFixture<PhotoViewComponentComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PhotoViewComponentComponent]
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoViewComponentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
