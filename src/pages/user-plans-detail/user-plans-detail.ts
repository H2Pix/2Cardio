import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the UserPlanDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-plans-detail',
  templateUrl: 'user-plans-detail.html'
})
export class UserPlansDetailPage {
  selectedItem: any;;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

 this.selectedItem = navParams.get('item');
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPlansDetailPage');
  }

}
