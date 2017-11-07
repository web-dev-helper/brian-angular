import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject }  from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadingService {
  // private subject = new Subject<any>();
  private bSubject = new BehaviorSubject(false);

  constructor() { 
  }

  getStatus():Observable<boolean> {
    // return this.subject.asObservable();
    return this.bSubject.asObservable();
  }

  setStatus(showSpinner: boolean) {
    // this.subject.next(showSpinner);
    this.bSubject.next(showSpinner);
  }
}
