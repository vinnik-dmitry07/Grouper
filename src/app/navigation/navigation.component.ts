import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';
import {UserModel} from '../shared/models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input()
  pageName: string;
  email: string;

  constructor(public userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.userService.hasToken()) {
      this.userService.loadUser().subscribe(
        (user: UserModel) => {
          this.email = user.email;
        },
        error => {
          // alert(error);
          this.userService.removeToken();
          this.router.navigateByUrl('/signin');
        }
      );
    }
  }

  logOut(): void {
    this.userService.removeToken();
    this.router.navigateByUrl('/');
  }
}
