import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupsGridComponent} from './groups-grid.component';

describe('GroupsGridComponent', () => {
  let component: GroupsGridComponent;
  let fixture: ComponentFixture<GroupsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupsGridComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
