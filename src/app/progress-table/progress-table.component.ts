import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-progress-table',
  templateUrl: './progress-table.component.html',
  styleUrls: ['./progress-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProgressTableComponent implements OnInit {
  @Input()
  data: UserProgress[];

  columnsToDisplay = ['name', 'value'];
  expandedElement: UserProgress | null;

  ngOnInit(): void {
    this.data = this.data.sort((a: UserProgress, b: UserProgress) => {
      if (a.value < b.value) {
        return 1;
      } else if (a.value > b.value) {
        return -1;
      } else {
        if (a.name < b.name) {
          return 1;
        } else if (a.name > b.name) {
          return -1;
        } else {
          return 0;
        }
      }
    });
  }
}

export interface UserProgress {
  name: string;
  value: number;
  content: string;
}
