import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Signup3Page} from '../signup3/signup3';

/*
  Generated class for the Signup2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'signup2',
  templateUrl: 'signup2.html'
})
export class Signup2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

singupStep3 = Signup3Page;

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup2Page');
  }

}
