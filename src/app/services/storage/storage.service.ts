import {Injectable} from '@angular/core';
import {Storage} from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  async save(data: any) {
    await Storage.set({
      key: 'user',
      value: JSON.stringify(data),
    });
  }

  async get() {
    const userStorage = await Storage.get({key: 'user'});
    return JSON.parse(userStorage.value);
  }
}
