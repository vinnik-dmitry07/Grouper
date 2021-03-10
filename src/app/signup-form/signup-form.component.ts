import {Component, OnInit} from '@angular/core';
import {BaseResponse} from '../shared/models/base-response';
import {UserModel} from '../shared/models/user';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css', '../shared/form-styles.css']
})

export class SignupFormComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  // TODO: Remove this when we're done
  get diagnostic(): string {
    return JSON.stringify(this.user);
  }

  roles = [{label: 'Студент', value: 'student'}, {label: 'Викладач', value: 'teacher'}];

  user: UserModel;
  // {firstName: 'Леся', lastName: 'Українка', email: 'vinnik.dmitry07@gmail.com', role: this.roles[1]}; // password: 'contra spem spero'

  submitted = false;

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
        alert(error);
        console.log(error);
      }
    );
  }

  // showFormControls(form: any): string {
  //   return form && form.controls.name &&
  //     form.controls.name.value; // Dr. IQ
  // }
}
