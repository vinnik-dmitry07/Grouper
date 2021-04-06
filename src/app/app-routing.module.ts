import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SignupPageComponent} from './signup-page/signup-page.component';
import {SigninPageComponent} from './signin-page/signin-page.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {GroupsTreePageComponent} from './groups-tree-page/groups-tree-page.component';
import {GroupsPageComponent} from './groups-page/groups-page.component';
import {PostsPageComponent} from './posts-page/posts-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'groups', component: GroupsPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'signin', component: SigninPageComponent},
  {path: 'posts/:group-id', component: PostsPageComponent},
  {path: 'groups-tree', component: GroupsTreePageComponent},
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
