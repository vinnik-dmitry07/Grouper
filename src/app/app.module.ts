import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {GroupCardComponent} from './group-card/group-card.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LMarkdownEditorModule} from 'ngx-markdown-editor';
import {MarkdownEditorComponent} from './markdown-editor/markdown-editor.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {EqualPasswordsValidatorDirective} from './shared/equal-passwords.directive';
import {MatExpansionModule} from '@angular/material/expansion';
import {PostComponent} from './post/post.component';
import {SigninFormComponent} from './signin-form/signin-form.component';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './shared/services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {GroupsComponent} from './groups/groups.component';
import {NavigationComponent} from './navigation/navigation.component';
import {PostsComponent} from './posts/posts.component';
import {LandingComponent} from './landing/landing.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTreeModule} from '@angular/material/tree';
import {GroupsChangeComponent} from './groups-change/groups-change.component';
import {NgxLinkifyjsModule} from 'ngx-linkifyjs';
import {GroupIdDialogComponent} from './group-id-dialog/group-id-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    GroupCardComponent,
    MarkdownEditorComponent,
    SignupFormComponent,
    EqualPasswordsValidatorDirective,
    PostComponent,
    SigninFormComponent,
    GroupsComponent,
    NavigationComponent,
    PostsComponent,
    LandingComponent,
    GroupsChangeComponent,
    GroupIdDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    LMarkdownEditorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCheckboxModule,
    MatTreeModule,
    NgxLinkifyjsModule.forRoot(),
    MatDialogModule,
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
