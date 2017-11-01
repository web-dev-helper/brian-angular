import { Component, OnInit } from '@angular/core';

import { DataAccessService } from '../../services/data-access.service';
import { PostService } from '../../services/post.service';

import { Post } from '../../interfaces/post';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts:Post[];
  posts:Post[];

  constructor(
    public dataAccess:DataAccessService,
    private postService: PostService
  ) {
   }

  ngOnInit(){ 
    if( environment.useFirebase ){
      this.postService.getPosts().subscribe( posts => {
        this.posts = posts;
      })
    }else{
      this.posts = this.dataAccess.getPosts();
    }

  }

}
