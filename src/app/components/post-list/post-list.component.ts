import { Component, OnInit } from '@angular/core';

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
    private postService: PostService
  ) {
   }

  ngOnInit(){ 
    this.postService.getPosts().subscribe( posts => {
      this.posts = posts;
    })
  }

}
