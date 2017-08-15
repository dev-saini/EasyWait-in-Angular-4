import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSetPreferencesComponent } from './get-set-preferences.component';

describe('GetSetPreferencesComponent', () => {
  let component: GetSetPreferencesComponent;
  let fixture: ComponentFixture<GetSetPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSetPreferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSetPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
