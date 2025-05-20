import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyIdentifierComponent } from './verify-identifier.component';

describe('VerifyIdentifierComponent', () => {
  let component: VerifyIdentifierComponent;
  let fixture: ComponentFixture<VerifyIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyIdentifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
