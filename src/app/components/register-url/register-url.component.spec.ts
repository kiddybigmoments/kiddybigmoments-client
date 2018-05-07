import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { RegisterUrlComponent } from './register-url.component'

describe('RegisterUrlComponent', () => {
  let component: RegisterUrlComponent
  let fixture: ComponentFixture<RegisterUrlComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterUrlComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterUrlComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
