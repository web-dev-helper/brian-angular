import { Component, OnInit, Input } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  // Show/Hide Delete Popup Dialog
  showDeleteDialog:boolean=false;

  key:string;
  post:Post={name:'', title:'', content:''};

  constructor(
    private flashMessagesService:FlashMessagesService,
    private postService:PostService,
    public router:Router,
    private activatedRoute:ActivatedRoute,
    private authService:AuthService
  ) {}

  ngOnInit() {
    // set path param
    this.key = this.activatedRoute.snapshot.params['key'];

    if( this.key != null)
    {
      this.postService.getPost(this.key).subscribe( post => {
        this.post = post;
      });
      console.log("Edit screen");
    } else {
      this.authService.getAuth().subscribe(auth => {
        this.post.name = auth.email;
      })
    }
  }

  // Handles both insert and update actions
  onSubmit(){
    if(this.key == null){
        this.postService.addPost(this.post);
        this.flashMessagesService.show('New post has been added',
                                    {cssClass:'alert-success', timeout: 2000});
        this.router.navigateByUrl('/');
    }else{
        this.postService.updatePost(this.key, this.post);
        this.flashMessagesService.show('Post has been updated',
                                    {cssClass:'alert-success', timeout: 2000});
        this.router.navigateByUrl('/');
    }
    
  }

  onDelete(e:Event){
    this.postService.deletePost(this.key)
    this.router.navigateByUrl("/");
  }
}
