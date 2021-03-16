import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {SigninFormComponent} from './signin-form/signin-form.component';
import {GroupsComponent} from './groups/groups.component';
import {PostsComponent} from './posts/posts.component';
import {LandingComponent} from './landing/landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'signup', component: SignupFormComponent},
  {path: 'signin', component: SigninFormComponent},
  {path: 'posts', component: PostsComponent},
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
