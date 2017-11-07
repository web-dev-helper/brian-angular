import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';

import { Post } from '../../interfaces/post';

import { environment } from '../../../environments/environment';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // posts:Post[];
  posts:Post[];

  constructor(
    private postService: PostService,
    private loadingService: LoadingService
  ) { }

  // ngOnInit(){ 
  //   this.postService.getPosts()
  //   .subscribe( 
  //     posts => { 
  //       this.loadingService.setStatus(true);
  //       setTimeout(3000);

  //       this.posts = posts; 

  //       this.loadingService.setStatus(false);
  //     }, 
  //     err =>{console.log("error occurred while retrieving posts")},
  //     () =>console.log("aaaa")
  //   );
  // }
  ngOnInit(){ 
    console.log("post-list.component ngOnInit() has been called")
    this.loadingService.setStatus(true);

    this.postService.getPosts().subscribe( 
      posts => { 
        this.loadingService.setStatus(true);
        console.log("----- in subscribe ----");
        setTimeout( () => {
          this.posts = posts; 
          this.loadingService.setStatus(false);
        }, 3000);
      },
      err => {},
      () => {console.log("test")} 
    );
  }
}