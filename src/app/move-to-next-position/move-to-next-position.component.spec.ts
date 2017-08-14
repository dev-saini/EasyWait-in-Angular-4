import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveToNextPositionComponent } from './move-to-next-position.component';

describe('MoveToNextPositionComponent', () => {
  let component: MoveToNextPositionComponent;
  let fixture: ComponentFixture<MoveToNextPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveToNextPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveToNextPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
