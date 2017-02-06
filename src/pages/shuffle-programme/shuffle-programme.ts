import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ShuffleProgrammeLevelPage } from '../shuffle-programme-level/shuffle-programme-level';

/*
  Generated class for the ShuffleProgramme page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'shuffle-programme',
  templateUrl: 'shuffle-programme.html'
})
export class ShuffleProgrammePage {

  level = ShuffleProgrammeLevelPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShuffleProgrammePage');
  }

}
