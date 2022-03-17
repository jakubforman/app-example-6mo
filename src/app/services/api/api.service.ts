import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/post.model';
import {environment} from '../../../environments/environment';
import {StorageService} from '../storage/storage.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) {
  }

  /**
   * Get all posts
   */
  posts$(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.apiBase + '/posts');
  }

  /**
   * Get single post by ID
   *
   * @param id
   */
  post$(id: string): Observable<Post> {
    // return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    // this.storage.getPost(Number.parseInt(id)); // TODO: dokončit načítání z localu

    return new Observable<Post>(subscriber => {
      // promise
      this.storage.getPost(Number(id))
        .then(post => {
          if (post) {
            // zde vrátím data až je mám
            subscriber.next(post);
          } else {
            // subscribe/observable
            this.http.get<Post>(environment.apiBase + '/posts/' + id)

              .pipe(tap(_post => {
                this.storage.savePost(_post);
              }))

              .subscribe(_post => {
                // zde vrátím data až je mám
                subscriber.next(_post);
              });
          }
        });
    });
  }
}
