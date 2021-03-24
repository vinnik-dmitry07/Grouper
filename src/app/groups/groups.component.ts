import {Component, Inject, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {GroupIdDialogComponent} from '../group-id-dialog/group-id-dialog.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {
  groups = [
    {
      name: 'РБАС',
      teacher: 'Панченко Т. В.',
      iconURL: 'https://api.mytimetable.live/media/img/teacher/panchenko_tv.jpg',
      link: 'https://api.mytimetable.live/media/img/teacher/panchenko_tv.jpg',
      description: 'Abc',
    },
    {
      name: 'Композиційна семантика SQL-подбних мов',
      teacher: 'Ткаченко О.',
      iconURL: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      link: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      description: 'Abc',
    },
    {
      name: 'Композиційна семантика SQL-подбних мов',
      teacher: 'Ткаченко О.',
      iconURL: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      link: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      description: 'Abc',
    },
    {
      name: 'Композиційна семантика SQL-подбних мов',
      teacher: 'Ткаченко О.',
      iconURL: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      link: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      description: 'Супер-пупер курс',
      useful: 'Якесь посилання папапапаппапа: https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-',
    }
  ];

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GroupIdDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(result);
      console.log(result);
    });
  }
}
