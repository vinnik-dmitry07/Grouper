import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsChangeComponent } from './groups-change.component';

describe('GroupsChangeComponent', () => {
  let component: GroupsChangeComponent;
  let fixture: ComponentFixture<GroupsChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
