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
  index:number;

  // form names
  // name:string;
  // title:string;
  // content:string;

  post:Post;

  constructor(
    public dataAccess:DataAccessService,
    public router:Router,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit() {
    // set path param
    let paramIndex = this.activatedRoute.snapshot.params['index'];
    console.log("index:"+paramIndex);

    if( paramIndex !== null)
    {
      this.post = this.dataAccess.getPost(paramIndex); 
    }else{
      this.post = {name:'', title:'', content:''};
    }
  }

  // Add new post to Database
  onAddPost() {
    this.dataAccess.addPost(this.post);
    this.router.navigateByUrl('/');
  }
}
