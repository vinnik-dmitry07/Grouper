import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {GroupService} from '../shared/services/group.service';
import {GroupModel, UserModel} from '../shared/models';

@Component({
  selector: 'app-groups-grid',
  templateUrl: './groups-grid.component.html',
  styleUrls: ['./groups-grid.component.css'],
})
export class GroupsGridComponent implements OnInit {
  @ViewChild('joinGroupDialogTemplate')
  joinGroupDialogTemplate: TemplateRef<any>;
  @Input()
  user: UserModel;

  joinGroupDialog: MatDialogRef<any>;

  tkachenko = new UserModel({
    firstName: 'O.',
    lastName: 'Ткаченко',
  });

  panchenko = new UserModel({
    firstName: 'Т. В.',
    lastName: 'Панченко',
  });

  baseGroups: GroupModel[] = [
    new GroupModel({
      id: 1,
      name: 'РБАС',
      creator: this.panchenko,
      iconURL: 'https://api.mytimetable.live/media/img/teacher/panchenko_tv.jpg',
      description: 'Abc',
      identificator: 'some-id1',
    }),
    new GroupModel({
      id: 1,
      name: 'Композиційна семантика SQL-подбних мов',
      creator: this.tkachenko,
      iconURL: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      description: 'Abc',
      identificator: 'some-id2',
    }),
    new GroupModel({
      id: 1,
      name: 'Композиційна семантика SQL-подбних мов',
      creator: this.tkachenko,
      iconURL: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      description: 'Abc',
      identificator: 'some-id3',
    }),
    new GroupModel({
      id: 1,
      name: 'Композиційна семантика SQL-подбних мов',
      creator: this.tkachenko,
      iconURL: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      description: 'Супер-пупер курс',
      usefulContent: 'Якесь посилання папапапаппа: https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-',
      identificator: 'some-id4',
    })
  ];
  groups: GroupModel[];

  constructor(private groupService: GroupService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.displayGroups();
  }

  displayGroups(): void {
    this.groupService.loadGroups(this.user.id).subscribe(
      (groups: GroupModel[]) => {
        console.log(groups);
        this.groups = [...this.baseGroups, ...groups];
      },
      error => console.log(error),
    );
  }

  createGroup(): void {
    this.groupService.createGroup(new GroupModel({name: 'Назва'})).subscribe(
      (newGroup: GroupModel) => {
        newGroup.creator = this.user;
        newGroup.editing = true;
        this.groups.push(newGroup);
      },
      error => console.log(error),
    );
  }

  openJoinDialog(): void {
    this.joinGroupDialog = this.dialog.open(this.joinGroupDialogTemplate);
  }

  joinGroup(input: HTMLInputElement): void {
    this.groupService.joinGroup(input.value).subscribe(
      (group: GroupModel) => {
        this.groups.push(group);
        input.value = '';
      },
      error => console.log(error),
    );
  }

  cancelJoin(): void {
    this.joinGroupDialog.close();
  }

  deleteGroupCard(group: GroupModel): void {
    this.groups.splice(this.groups.indexOf(group));
  }
}
