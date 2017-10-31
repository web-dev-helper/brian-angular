import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  @Input() showPopup:boolean;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("showPupup@constructor:"+this.showPopup);
  }
  
  cancel(){
    this.showPopup=false;
    console.log("showPupup@cancel:"+this.showPopup);
  }
  
  deletePost(){
    this.showPopup=false;
    this.delete.emit();
  }
}
