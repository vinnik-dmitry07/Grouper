import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UserModel} from '../shared/models';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css', '../shared/form-styles.css']
})
export class SigninPageComponent implements OnInit {
  @ViewChild('errorDialog') errorDialog: TemplateRef<any>;

  user: UserModel;
  submitted = false;

  constructor(private userService: UserService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    if (this.userService.hasToken()) {
      this.router.navigateByUrl('/groups');
    }
    this.user = new UserModel();
  }

  onSubmit(): void {
    this.submitted = true;

    this.userService.signIn(this.user).subscribe(
      (data: any) => {
        if (data.token) {
          this.userService.setToken(data.token);
          this.router.navigateByUrl('/groups');
        }
      },
      error => {
        this.dialog.open(this.errorDialog);
      }
    );
  }
}
