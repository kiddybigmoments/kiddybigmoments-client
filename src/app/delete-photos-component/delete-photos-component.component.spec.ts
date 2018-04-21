import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DeletePhotosComponentComponent } from './delete-photos-component.component'

describe('DeletePhotosComponentComponent', () => {
  let component: DeletePhotosComponentComponent
  let fixture: ComponentFixture<DeletePhotosComponentComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DeletePhotosComponentComponent]
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePhotosComponentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
