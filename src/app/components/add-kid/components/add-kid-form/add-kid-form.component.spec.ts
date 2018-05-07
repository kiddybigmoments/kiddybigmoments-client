import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { AddKidFormComponent } from './add-kid-form.component'

describe('AddKidComponent', () => {
  let component: AddKidFormComponent
  let fixture: ComponentFixture<AddKidFormComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddKidFormComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKidFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
