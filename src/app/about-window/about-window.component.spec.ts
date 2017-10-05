import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWindowComponent } from './about-window.component';

describe('AboutWindowComponent', () => {
  let component: AboutWindowComponent;
  let fixture: ComponentFixture<AboutWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
