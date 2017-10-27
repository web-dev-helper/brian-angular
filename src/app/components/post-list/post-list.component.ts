import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts:any[]=[
    { name:'Brian', title:'Test title from Brian', date:'2017-01-10'},
    { name:'Gerrard', title:'Test title from Gerrard', date:'2017-02-10'},
    { name:'Eric', title:'Test title from Eric', date:'2017-05-07'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
