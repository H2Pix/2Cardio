import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ShuffleProgrammeResultPage } from '../shuffle-programme-result/shuffle-programme-result';


/*
  Generated class for the ShuffleProgrammeLevel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shuffle-programme-level',
  templateUrl: 'shuffle-programme-level.html'
})
export class ShuffleProgrammeLevelPage {

  shuffleResult = ShuffleProgrammeResultPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShuffleProgrammeLevelPage');
  }

}
