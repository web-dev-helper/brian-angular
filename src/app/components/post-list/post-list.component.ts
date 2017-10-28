import { Component, OnInit } from '@angular/core';

import { DataAccessService } from '../../services/data-access.service';

import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts:Post[];

  constructor(public dataAccess:DataAccessService) {
    this.posts = this.dataAccess.getPosts();
   }

  ngOnInit() {
  }

}
