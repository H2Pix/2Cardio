import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the FlashProgramme page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-flash-programme',
  templateUrl: 'flash-programme.html'
})
export class FlashProgrammePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlashProgrammePage');
  }

}
