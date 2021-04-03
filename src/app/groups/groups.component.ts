import {Component, Inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {GroupService} from '../shared/services/group.service';
import {GroupModel, UserModel} from '../shared/models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {
  @ViewChild('joinGroupDialogTemplate') joinGroupDialogTemplate: TemplateRef<any>;

  joinGroupDialog: MatDialogRef<any>;

  groups: GroupModel[] = [
    new GroupModel({
      id: 1,
      name: 'РБАС',
      teacher: 'Панченко Т. В.',
      iconURL: 'https://api.mytimetable.live/media/img/teacher/panchenko_tv.jpg',
      description: 'Abc',
      identificator: 'some-id1',
    }),
    new GroupModel({
      id: 1,
      name: 'Композиційна семантика SQL-подбних мов',
      teacher: 'Ткаченко О.',
      iconURL: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      description: 'Abc',
      identificator: 'some-id2',
    }),
    new GroupModel({
      id: 1,
      name: 'Композиційна семантика SQL-подбних мов',
      teacher: 'Ткаченко О.',
      iconURL: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      description: 'Abc',
      identificator: 'some-id3',
    }),
    new GroupModel({
      id: 1,
      name: 'Композиційна семантика SQL-подбних мов',
      teacher: 'Ткаченко О.',
      iconURL: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      description: 'Супер-пупер курс',
      usefulContent: 'Якесь посилання папапапаппа: https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-',
      identificator: 'some-id4',
    })
  ];

  constructor(private userService: UserService, private groupService: GroupService, private dialog: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.userService.hasToken()) {
      this.router.navigateByUrl('/signin');
    }

    this.displayGroups();
  }

  displayGroups(): void {
    this.userService.loadUser().subscribe(
      (user: UserModel) => {
        this.groupService.loadGroups(user.id).subscribe(
          (groups: GroupModel[]) => {
            console.log(groups);
            // this.groups = groups;
          },
          error => {
            // alert(error);
            console.log(error);
          }
        );
      },
      error => {
        // alert(error);
        console.log(error);
      }
    );
  }

  createGroup(): void {
    this.groupService.createGroup(new GroupModel({ name: '123', description: 'hello' })).subscribe(
      (data) => {
        this.displayGroups();
      },
      error => {
        // alert(error);
        console.log(error);
      }
    );
  }

  openJoinDialog(): void {
    this.joinGroupDialog = this.dialog.open(this.joinGroupDialogTemplate);

    this.joinGroupDialog.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  joinGroup(id: string): void {

  }

  cancelJoin(): void {
    this.joinGroupDialog.close();
  }
}
