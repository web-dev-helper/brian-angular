import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { DataAccessService } from '../../services/data-access.service';

import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  postId:number;
  post:Post;

  // Show/Hide Delete Popup Dialog
  showDeleteDialog:boolean=false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataAccessService:DataAccessService
  ) {
  }

  ngOnInit() {
    this.postId = this.activatedRoute.snapshot.params['postId'];
    this.post = this.dataAccessService.getPost(this.postId);
  }

  onDelete(){
    this.dataAccessService.deletePost(this.postId);
    this.router.navigateByUrl("/");
  }

  onEditPost(){
    this.router.navigateByUrl("/add-post/"+this.postId);
  }
}
