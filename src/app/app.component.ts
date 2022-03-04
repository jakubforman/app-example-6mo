import {Component} from '@angular/core';
// import {StorageService} from './services/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    // private storage: StorageService
  ) {

    // eslint-disable-next-line @typescript-eslint/no-shadow
    /*this.storage.get().then(user => {
      console.log(user);
      // alert(user.name);
    });*/
    // this.getUser(); // alternativní řešení


    // uložím data uživatele (fakové data)
    /*const user = {
      name: 'Honza'
      // ...
    };
    this.storage.save(user);*/
  }

  /*async getUser() {
    const user = await this.storage.get();
    console.log(user);
  }*/
}
