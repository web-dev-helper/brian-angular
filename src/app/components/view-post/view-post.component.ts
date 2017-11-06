import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  key:string;
  post:Post={ name:'', title:'', content:''};

  // Show/Hide Delete Popup Dialog
  showDeleteDialog:boolean=false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private postService:PostService
  ) {
  }

  ngOnInit() {
    this.key = this.activatedRoute.snapshot.params['key'];
    this.postService.getPost(this.key).subscribe( post => {
      this.post = post;
      // console.log(this.post.name);
    });
  }

  onDelete(e:Event){
    // this.dataAccessService.deletePost(this.key);
    this.postService.deletePost(this.key)
    this.router.navigateByUrl("/");
  }

  onEditPost(){
    this.router.navigateByUrl("/add-post/"+this.key);
  }
}
