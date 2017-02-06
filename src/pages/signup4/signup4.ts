import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Signup5Page} from '../signup5/signup5';

/*
  Generated class for the Signup4 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'signup4',
  templateUrl: 'signup4.html'
})
export class Signup4Page {

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
}


  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  singupStep5 = Signup5Page;
  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup4Page');
  }

}
