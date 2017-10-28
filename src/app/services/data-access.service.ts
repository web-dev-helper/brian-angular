import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable()
export class DataAccessService {

  posts:Post[]=[
    { name:'Brian', title:'Test title from Brian', content:'Content test 1', date:'2017-01-10'},
    { name:'Gerrard', title:'Test title from Gerrard', content:'Content test 1', date:'2017-02-10'},
    { name:'Eric', title:'Test title from Eric', content:'Content test 1', date:'2017-05-07'},
  ];

  constructor() { }

  getPosts(){
    return this.posts;
  }

  getPost(index:number){
    return this.posts[index];
  }

  addPost(post:Post){
    this.posts.push(post);
  }

  updatePost(post:Post, index:number){
    //let originalPost:Post = this.posts[index];
    this.posts[index] = post;
  }
}

