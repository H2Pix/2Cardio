import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {IntroInfoPage} from '../intro_info/intro_info';
import {LoginPage} from '../login/login';
import {SignupPage} from '../signup/signup';

@Component({
  selector: 'introAccueil',
  templateUrl: 'intro_accueil.html'
})
export class IntroAccueil {
info = IntroInfoPage;
login = LoginPage;
signup = SignupPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
