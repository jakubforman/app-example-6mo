import {Injectable} from '@angular/core';
import {Post} from '../../models/post.model';
import {Storage} from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  async savePost(post: Post) {

    // získám pole postů z localstorage
    const posts: Post[] = await this.getPosts();

    // kontrola, jestli již post není v poli
    const existId = posts.findIndex(_post => _post.id === post.id);
    if (existId > -1) {
      return;
    }

    // přidám post do pole postů
    posts.push(post);

    // uložím pole postů do localstorage
    await Storage.set({
      key: 'posts',
      value: JSON.stringify(posts),
    });
  }

  async getPost(id: number): Promise<Post> {
    // získám pole postů z localstorage
    const posts: Post[] = await this.getPosts();

    // vyhledám jeden post podle ID v poli postů
    const post = posts.find(_post => _post.id === id);

    /*posts.find(post => {
      return post.id === id;
    });*/

    return post;
  }

  private async getPosts(): Promise<Post[]> {
    // vytáhnu data z local DB
    const xposts = await Storage.get({key: 'posts'});

    // Pokud data ještě nebyly uloženy
    if (xposts.value === null) {
      return [];
    }

    // přeložím data ze stringu do objektu
    return JSON.parse(xposts.value) as Post[];
  }
}
