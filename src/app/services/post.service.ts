import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Post } from '../interfaces/post';

@Injectable()
export class PostService {
  postRef: AngularFireList<any>;
  posts: Observable<any[]>;
  post: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    this.postRef = this.db.list('posts');
    this.posts = this.postRef.snapshotChanges().map(changes => {
      return changes.map(c=> ({ key: c.payload.key, ...c.payload.val()
      }));
    });
   }

   getPosts(){
     return this.posts;
   }

   addPost(post:Post){
    this.postRef.push(post); 
   }

   // getPost()

   // updatePost()

   // deletePost()
}
