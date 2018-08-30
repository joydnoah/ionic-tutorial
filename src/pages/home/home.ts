import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { ProfilePage } from '../profile/profile';
import { HttpClient } from '@angular/common/http';
import { Platform } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[]=[];
  email: string;
  password: string;
  logged_in: boolean=false;
  operating_system: string='none';
  serial: string='none';
  date;

  constructor(
    public navCtrl: NavController,
    public UserService: UserService,
    public modalCtrl: ModalController,
    public http: HttpClient,
    public plt: Platform,
    private device: Device
  ) {}

  loginRequest(){
    var url = 'http://localhost:1337/api/v1/entrance/login'
    this.http.put(url, {
      'emailAddress': this.email,
      'password': this.password
    },
    {
      responseType: 'text'
    }).subscribe(data => {
      console.log(data)
      this.logged_in = true
    },
    (error) => {
      console.log(error)
    })
  }

  ionViewDidLoad(){
    this.serial = this.device.serial
    this.operating_system = this.device.platform
    this.date = new Date();
    
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
