import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ShuffleProgrammeResult page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shuffle-programme-result',
  templateUrl: 'shuffle-programme-result.html'
})
export class ShuffleProgrammeResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShuffleProgrammeResultPage');
  }

}
