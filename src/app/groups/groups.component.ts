import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups = [
    {
      name: 'РБАС',
      teacher: 'Панченко Т. В.',
      iconURL: 'https://api.mytimetable.live/media/img/teacher/panchenko_tv.jpg',
      link: 'https://api.mytimetable.live/media/img/teacher/panchenko_tv.jpg',
    },
    {
      name: 'Композиційна семантика SQL-подбних мов',
      teacher: 'Ткаченко О.',
      iconURL: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
      link: 'https://lh3.googleusercontent.com/a-/AOh14GgwNtAy2dXTp4YNgM7siysLvHlvSggRVxfI221C=s40-c',
    }
  ];

  ngOnInit(): void {
  }
}
