import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupIdDialogComponent } from './group-id-dialog.component';

describe('GroupIdDialogComponent', () => {
  let component: GroupIdDialogComponent;
  let fixture: ComponentFixture<GroupIdDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupIdDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupIdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
