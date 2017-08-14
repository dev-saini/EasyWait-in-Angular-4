import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueCurrentStateComponent } from './queue-current-state.component';

describe('QueueCurrentStateComponent', () => {
  let component: QueueCurrentStateComponent;
  let fixture: ComponentFixture<QueueCurrentStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueCurrentStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueCurrentStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
