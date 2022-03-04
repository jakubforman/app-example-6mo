import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

/**
 * Post model
 *
 * Toto je model příspěvku
 */
export interface Post {
  id: number;
  userId: string;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  posts$(): Observable<Post[]> {
    // https://jsonplaceholder.typicode.com/posts
    const endpoint = environment.apiBase + '/posts';
    return this.http.get<Post[]>(endpoint);
  }

  post$(id: string): Observable<Post> {
    // https://jsonplaceholder.typicode.com/posts/2
    const endpoint = environment.apiBase + '/posts/' + id;
    return this.http.get<Post>(endpoint);
  }
}
