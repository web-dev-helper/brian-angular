import { Component, OnInit, Input } from '@angular/core';

import { DataAccessService } from '../../services/data-access.service';

import { Router, ActivatedRoute } from '@angular/router';

import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  // path param 'index'
  postId:number;

  post:Post={postId:-1, name:'', title:'', content:''};

  constructor(
    public dataAccess:DataAccessService,
    public router:Router,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit() {
    // set path param
    let id = this.activatedRoute.snapshot.params['postId'];

    if( id != null)
    {
      this.post = this.dataAccess.getPost(id); 
      console.log("Edit screen");
    }
  }

  // Handles both insert and update actions
  onSubmit(){
    if(this.post.postId == -1){
      this.dataAccess.addPost(this.post);
    }else{
      this.dataAccess.updatePost(this.post);
    }
    
    this.router.navigateByUrl('/');
  }

  onDelete(){
    this.dataAccess.deletePost(this.postId);
    this.router.navigateByUrl("/");
  }
}
