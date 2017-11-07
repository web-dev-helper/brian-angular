import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment'
import { FlashMessagesModule } from 'angular2-flash-messages';

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
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { DeleteDialogComponent } from './popups/delete-dialog/delete-dialog.component';

// Services
import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';

import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';
import { SettingsComponent } from './components/settings/settings.component';

import { LoadingService } from './services/loading.service';

const appRoutes=[
  {path:'login', component: LoginComponent},
  {path:'', component: DashboardComponent, canActivate:[AuthGuard] },
  {path:'add-post', component: AddPostComponent, canActivate:[AuthGuard] },
  {path:'add-post/:key', component: AddPostComponent, canActivate:[AuthGuard] },
  {path:'view-post/:key', component: ViewPostComponent, canActivate:[AuthGuard] },
  {path:'about', component: AboutComponent},
  {path:'register', component: RegisterComponent, canActivate:[RegisterGuard]},
  {path:'settings', component: SettingsComponent, canActivate:[AuthGuard]},
  // {path:'**', redirectTo: '/login'}
  {path:'**', component: PageNotFoundComponent}
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
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'post-db'),
    AngularFireAuthModule,
    FlashMessagesModule
  ],
  providers: [
    PostService,
    AngularFireDatabase,
    AngularFireDatabaseModule,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
