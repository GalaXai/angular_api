import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFourComponent } from './form-four.component';

describe('FormFourComponent', () => {
  let component: FormFourComponent;
  let fixture: ComponentFixture<FormFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFourComponent]
    });
    fixture = TestBed.createComponent(FormFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
