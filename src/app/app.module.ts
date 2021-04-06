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
import {SignupPageComponent} from './signup-page/signup-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {EqualPasswordsValidatorDirective} from './shared/equal-passwords.directive';
import {MatExpansionModule} from '@angular/material/expansion';
import {PostComponent} from './post/post.component';
import {SigninPageComponent} from './signin-page/signin-page.component';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './shared/services/user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserNavigationComponent} from './user-navigation/user-navigation.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTreeModule} from '@angular/material/tree';
import {GroupsTreePageComponent} from './groups-tree-page/groups-tree-page.component';
import {NgxLinkifyjsModule} from 'ngx-linkifyjs';
import {MatDialogModule} from '@angular/material/dialog';
import {GroupService} from './shared/services/group.service';
import {PostService} from './shared/services/post.service';
import {GroupsPageComponent} from './groups-page/groups-page.component';
import {PostsPageComponent} from './posts-page/posts-page.component';
import {TokenInterceptor} from './http-interceptors/token-interceptor';
import {FormService} from './shared/services/form.service';
import {GroupsGridComponent} from './groups-grid/groups-grid.component';
import {PostsListComponent} from './posts-list/posts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupCardComponent,
    MarkdownEditorComponent,
    SignupPageComponent,
    EqualPasswordsValidatorDirective,
    PostComponent,
    SigninPageComponent,
    UserNavigationComponent,
    GroupsGridComponent,
    PostsListComponent,
    LandingPageComponent,
    GroupsTreePageComponent,
    GroupsPageComponent,
    PostsPageComponent,
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
    UserService,
    GroupService,
    PostService,
    FormService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
