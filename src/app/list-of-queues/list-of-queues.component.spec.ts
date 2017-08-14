import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfQueuesComponent } from './list-of-queues.component';

describe('ListOfQueuesComponent', () => {
  let component: ListOfQueuesComponent;
  let fixture: ComponentFixture<ListOfQueuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfQueuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
