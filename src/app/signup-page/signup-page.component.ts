import {Component, OnInit} from '@angular/core';
import {BaseResponse, UserModel} from '../shared/models';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css', '../shared/form-styles.css']
})

export class SignupPageComponent implements OnInit {

  roles = [{label: 'Студент', value: 'student'}, {label: 'Викладач', value: 'teacher'}];
  user: UserModel;
  submitted = false;

  constructor(private userService: UserService, private router: Router) {
  }
  // {firstName: 'Леся', lastName: 'Українка', email: 'vinnik.dmitry07@gmail.com', role: this.roles[1]}; // password: 'contra spem spero'

  // TODO: Remove this when we're done
  get diagnostic(): string {
    return JSON.stringify(this.user);
  }

  ngOnInit(): void {
    this.user = new UserModel();
  }

  onSubmit(): void {
    this.submitted = true;

    this.userService.signUp(this.user).subscribe(
      (data: BaseResponse) => {
        this.router.navigateByUrl('/signin');
      },
      error => {
        console.log(error);
      }
    );
  }

  // showFormControls(form: any): string {
  //   return form && form.controls.name &&
  //     form.controls.name.value; // Dr. IQ
  // }
}
