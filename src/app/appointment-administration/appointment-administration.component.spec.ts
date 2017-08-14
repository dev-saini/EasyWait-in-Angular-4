import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentAdministrationComponent } from './appointment-administration.component';

describe('AppointmentAdministrationComponent', () => {
  let component: AppointmentAdministrationComponent;
  let fixture: ComponentFixture<AppointmentAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
