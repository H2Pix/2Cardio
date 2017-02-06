import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Signup2Page} from '../signup2/signup2';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  singupStep2 = Signup2Page;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
