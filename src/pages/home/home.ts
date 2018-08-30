import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { ProfilePage } from '../profile/profile';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[]=[];

  constructor(
    public navCtrl: NavController,
    public UserService: UserService,
    public modalCtrl: ModalController,
    public http: HttpClient
  ) {}

  ionViewDidLoad(){
    var url = 'http://localhost:1337/api/v1/entrance/login'
    this.http.put(url, {
      'emailAddress': 'test@example.com',
      'password': 'TykimikK1992'
    },
    {
      responseType: 'text'
    }).subscribe(data => {
      console.log(data)
    })

    this.UserService.getUsers()
    .subscribe(
      (data) => { // Success
        console.log(data['results'])
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  getToOtherPage(user) {
    this.navCtrl.push(ProfilePage, {
      user: user
    })
  }
}
