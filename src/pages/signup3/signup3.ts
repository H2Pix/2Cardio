import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Signup4Page} from '../signup4/signup4';

/*
  Generated class for the Signup3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup3',
  templateUrl: 'signup3.html'
})
export class Signup3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  singupStep4 = Signup4Page;
  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup3Page');
  }

}
