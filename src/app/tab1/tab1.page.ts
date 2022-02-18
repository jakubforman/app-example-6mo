import {Component} from '@angular/core';
import {ApiService, Post} from '../services/api/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  posts$: Observable<Post[]>;

  count = 0;

  constructor(
    private api: ApiService
  ) {
    // set observer to posts$
    this.posts$ = this.api.posts$();

    /* this.posts$.subscribe(data=>{
    });*/
  }

  plus() {
    this.count++;
  }

  clickMe() {
    alert('Ahoj');
  }
}
