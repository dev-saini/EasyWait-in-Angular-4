import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviveAppointmentsComponent } from './revive-appointments.component';

describe('ReviveAppointmentsComponent', () => {
  let component: ReviveAppointmentsComponent;
  let fixture: ComponentFixture<ReviveAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviveAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviveAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
