import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css', '../shared/form-styles.css']
})
export class SigninFormComponent implements OnInit {
  model = {};

  constructor() { }

  submitted = false;

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
