import { Component, OnInit, Input } from '@angular/core';

import { DataAccessService } from '../../services/data-access.service';
import { PostService } from '../../services/post.service';

import { Router, ActivatedRoute } from '@angular/router';

import { Post } from '../../interfaces/post';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  // Show/Hide Delete Popup Dialog
  showDeleteDialog:boolean=false;

  key:string;
  post:Post={postId:-1, name:'', title:'', content:''};

  constructor(
    public dataAccess:DataAccessService,
    private postService:PostService,
    public router:Router,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit() {
    // set path param
    this.key = this.activatedRoute.snapshot.params['key'];

    if( this.key != null)
    {
      // this.post = this.dataAccess.getPost(id); 
      this.postService.getPost(this.key).subscribe( post => {
        this.post = post;
      });
      console.log("Edit screen");
    }
  }

  // Handles both insert and update actions
  onSubmit(){
    if(this.key == null){
      if( environment.useFirebase )
        this.postService.addPost(this.post);
      else
        this.dataAccess.addPost(this.post);
    }else{
      if( environment.useFirebase )
        this.postService.updatePost(this.key, this.post);
      else
        this.dataAccess.updatePost(this.post);
    }
    
    this.router.navigateByUrl('/');
  }

  onDelete(e:Event){
    // this.dataAccessService.deletePost(this.key);
    this.postService.deletePost(this.key)
    this.router.navigateByUrl("/");
  }
}
