import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment'

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

import { DeleteDialogComponent } from './popups/delete-dialog/delete-dialog.component';

// Services
import { DataAccessService } from './services/data-access.service';
import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';

const appRoutes=[
//  {path:'nav-bar', component:NavBarComponent},
  {path:'', component:DashboardComponent},
  {path:'add-post', component:AddPostComponent},
  {path:'add-post/:key', component:AddPostComponent},
  {path:'view-post/:key', component:ViewPostComponent},
  {path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    PostListComponent,
    SideBarComponent,
    AddPostComponent,
    ViewPostComponent,
    AboutComponent,
    FooterComponent,
    DeleteDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'post-db'),
    AngularFireAuthModule
  ],
  providers: [
    DataAccessService,
    PostService,
    AngularFireDatabase,
    AngularFireDatabaseModule,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
