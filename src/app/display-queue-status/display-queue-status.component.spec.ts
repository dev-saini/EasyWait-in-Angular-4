import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQueueStatusComponent } from './display-queue-status.component';

describe('DisplayQueueStatusComponent', () => {
  let component: DisplayQueueStatusComponent;
  let fixture: ComponentFixture<DisplayQueueStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayQueueStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQueueStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
