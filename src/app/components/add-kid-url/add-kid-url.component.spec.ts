import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AddKidUrlComponent } from './add-kid-url.component'

describe('AddKidUrlComponent', () => {
  let component: AddKidUrlComponent
  let fixture: ComponentFixture<AddKidUrlComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddKidUrlComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKidUrlComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
