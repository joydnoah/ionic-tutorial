import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {

  constructor(
    public http: HttpClient,
    private http_native: HTTP
  ) {
    console.log('Hello UserServiceProvider Provider');
  }

  getUsers(
  ) {
    this.http_native.get('https://randomuser.me/api/?results=5', {}, {})
    .then(data => {
      console.log('status')
      console.log(data.status);
      console.log('data')
      console.log(data.data); // data received by server
      console.log('headers')
      console.log(Object.keys(data.headers));
      console.log('data keys')
      console.log(Object.keys(data.data));
      console.log(Object.keys(data.headers));
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
    });
    return this.http.get('https://randomuser.me/api/?results=25');
  }
}
