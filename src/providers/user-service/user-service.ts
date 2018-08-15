import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {

  constructor(public http: HttpClient) {
    console.log('Hello UserServiceProvider Provider');
  }

  getUsers(
  ) {
    return this.http.get('https://randomuser.me/api/?results=25');
  }
}
