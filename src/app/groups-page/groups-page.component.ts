import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GroupsGridComponent} from '../groups-grid/groups-grid.component';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.css']
})
export class GroupsPageComponent implements OnInit{
  constructor(private route: ActivatedRoute, private userService: UserService){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      let token = params.token;

      if(token){
        this.userService.setToken(token);
      }
    })
  }

  @ViewChild('groupsGridComponent')
  groupsGridComponent: GroupsGridComponent;
}
