import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/post.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
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
   * @param id
   */
  post$(id: string): Observable<Post> {
    // return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return this.http.get<Post>(environment.apiBase + '/posts/' + id);
  }
}
