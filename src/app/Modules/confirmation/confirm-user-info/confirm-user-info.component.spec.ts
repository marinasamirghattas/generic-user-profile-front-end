import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmUserInfoComponent } from './confirm-user-info.component';

describe('ConfirmUserInfoComponent', () => {
  let component: ConfirmUserInfoComponent;
  let fixture: ComponentFixture<ConfirmUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmUserInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
