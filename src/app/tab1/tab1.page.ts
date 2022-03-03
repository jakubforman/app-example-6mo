import {Component} from '@angular/core';
import {ApiService} from '../services/api/api.service';
import {Observable} from 'rxjs';
import {Post} from '../models/post.model';

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
    this.posts$ = this.api.posts$();
    /*
    this.api.posts$().subscribe(posts => {
      console.log(posts);
    });
     */
  }

  plus() {
    this.count++;
  }

  clickMe() {
    alert('Ahoj');
  }
}
