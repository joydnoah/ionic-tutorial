import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { UserService } from '../../providers/user-service/user-service';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[]=[];

  constructor(
    public navCtrl: NavController,
    public UserService: UserService,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad(){
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
