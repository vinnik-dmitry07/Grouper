import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css', '../shared/form-styles.css']
})

export class SignupFormComponent implements OnInit {
  // TODO: Remove this when we're done
  get diagnostic(): string {
      return JSON.stringify(this.user);
  }

  roles = ['Студент', 'Викладач'];

  user: any = {}; //{firstName: 'Леся', lastName: 'Українка', email: 'vinnik.dmitry07@gmail.com', role: this.roles[1]}; // password: 'contra spem spero'

  submitted = false;

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
  }

  // showFormControls(form: any): string {
  //   return form && form.controls.name &&
  //     form.controls.name.value; // Dr. IQ
  // }
}
