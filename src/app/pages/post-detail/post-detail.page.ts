import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {Observable} from 'rxjs';
import {Post} from '../../models/post.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.page.html',
  styleUrls: ['./post-detail.page.scss'],
})
export class PostDetailPage implements OnInit {

  post$: Observable<Post>;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    this.post$ = this.api.post$(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
