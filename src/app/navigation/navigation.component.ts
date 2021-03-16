import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  pageName: string;

  constructor(public userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.userService.logOut();
    this.router.navigateByUrl('/');
  }
}
