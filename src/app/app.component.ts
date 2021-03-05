import {Component} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grouper';

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

  mobileQuery: MediaQueryList;

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }
}
