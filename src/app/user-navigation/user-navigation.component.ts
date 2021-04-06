import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';
import {UserModel} from '../shared/models';

@Component({
  selector: 'app-navigation',
  templateUrl: './user-navigation.component.html',
  styleUrls: ['./user-navigation.component.css']
})
export class UserNavigationComponent implements OnInit {
  @Input()
  pageName: string;

  user: UserModel;

  constructor(public userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    if (!this.userService.hasToken()) {
      this.router.navigateByUrl('/signin');
    }

    this.userService.loadUser().subscribe(
      (user: UserModel) => {
        this.user = user;
      },
      error => {
        this.userService.removeToken();
        this.router.navigateByUrl('/signin');
      }
    );
  }

  logOut(): void {
    this.userService.removeToken();
    this.router.navigateByUrl('/');
  }
}
