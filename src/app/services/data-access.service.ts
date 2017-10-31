import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable()
export class DataAccessService {

  posts:Post[]=[
    { postId:0, name:'Brian', title:'Test title from Brian', content:'Content test from Brian', date:'2017-01-10'},
    { postId:1, name:'Gerrard', title:'Test title from Gerrard', content:'Content test from Gerrard', date:'2017-02-10'},
    { postId:2, name:'Eric', title:'Test title from Eric', content:'Content test from Eric', date:'2017-05-07'},
  ];

  constructor() { }

  getPosts(){
    return this.posts;
  }

  getPost(postId:number){

    for(let p of this.posts)
    {
      if( p.postId == postId)
      {
        return p;
      }
    }
  }

  addPost(post:Post){
    this.posts.push(post);
  }

  // updatePost(post:Post, postId:number){
    //let originalPost:Post = this.posts[index];
  updatePost(post:Post){
    for(let p of this.posts)
    {
      if( p.postId == post.postId)
      {
        p = post;
      }
    }
  }

  deletePost(postId:number){

    for(let i=0; i < this.posts.length; i++ )
    {
      if( this.posts[i].postId == postId)
      {
        this.posts.splice(i, 1);
      }
    }
  }
}

