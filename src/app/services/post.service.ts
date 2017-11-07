import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Post } from '../interfaces/post';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class PostService {
  postRef: AngularFireList<any>;
  posts: Observable<any[]>;
  post: Observable<any>;

  constructor(
    private db: AngularFireDatabase,
    private loadingService:LoadingService
  ) {
    this.postRef = this.db.list('posts');
    this.posts = this.postRef.snapshotChanges().map(changes => {

      // this.loadingService.setStatus(true);
      // console.log("55555555555");

      let data =  changes.map(c=> ({ key: c.payload.key, ...c.payload.val() }));

      // this.loadingService.setStatus(false);
      // console.log("66666666");

      return data;
    });
   }

   getPosts(){
    return this.posts;
   }

   addPost(post:Post){
     this.postRef.push(post);
   }

   // getPost()
   getPost(key:string){
    this.post = this.db.object('/posts/'+key).valueChanges();
    return this.post;
   }

   // updatePost()
   updatePost(key:string, post:Post){
     return this.postRef.update(key, post);
   }

   // deletePost()
   deletePost(key:string){
     return this.postRef.remove(key);
   }
}
