import {Component, OnInit, ViewChild} from '@angular/core';
import {GroupsGridComponent} from '../groups-grid/groups-grid.component';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.css']
})
export class GroupsPageComponent implements OnInit {
  @ViewChild('groupsGridComponent')
  groupsGridComponent: GroupsGridComponent;

  constructor() {
  }

  ngOnInit(): void {
  }

}
