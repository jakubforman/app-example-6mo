import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService, Post} from '../../services/api/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    const idPost = this.route.snapshot.paramMap.get('id');
    // console.log(idPost);

    this.post$ = this.api.post$(idPost);
  }

  ngOnInit() {
  }

}
