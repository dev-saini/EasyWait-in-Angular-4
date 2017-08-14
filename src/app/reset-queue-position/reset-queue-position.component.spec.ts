import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetQueuePositionComponent } from './reset-queue-position.component';

describe('ResetQueuePositionComponent', () => {
  let component: ResetQueuePositionComponent;
  let fixture: ComponentFixture<ResetQueuePositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetQueuePositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetQueuePositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
