import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsTreePageComponent } from './groups-tree-page.component';

describe('GroupsTreePageComponent', () => {
  let component: GroupsTreePageComponent;
  let fixture: ComponentFixture<GroupsTreePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsTreePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
