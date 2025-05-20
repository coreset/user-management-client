import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCodeFormComponent } from './verify-code-form.component';

describe('VerifyCodeFormComponent', () => {
  let component: VerifyCodeFormComponent;
  let fixture: ComponentFixture<VerifyCodeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyCodeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyCodeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
