import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router'

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';

import { DataAccessService } from './services/data-access.service';

import { FormsModule } from '@angular/forms';

const appRoutes=[
//  {path:'nav-bar', component:NavBarComponent},
  {path:'', component:DashboardComponent},
  {path:'add-post', component:AddPostComponent},
  {path:'add-post/:postId', component:AddPostComponent},
  {path:'view-post/:postId', component:ViewPostComponent},
  {path:'about', component:AboutComponent}
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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataAccessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
