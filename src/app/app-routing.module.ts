import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {SigninFormComponent} from './signin-form/signin-form.component';

const routes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: 'signin', component: SigninFormComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
