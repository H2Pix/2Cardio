import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserPlansDetailPage} from '../user-plans-detail/user-plans-detail';
/*
  Generated class for the UserPlaningPlanMass page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-plans',
  templateUrl: 'user-plans.html'
})
export class UserPlansPage {
  selectedItem: any;

  items: Array<{title: string, nbSemaines: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.selectedItem = navParams.get('item');

    this.items = [];
    for(let i = 1; i < 8; i++) {
      this.items.push({
        title: 'Plans d\'entrainement ' + i,
        nbSemaines: 'Semaines #' + i,
        
      });
    }
    

  }

  
itemTapped(event, item) {
    this.navCtrl.push(UserPlansDetailPage, {
      item: item
    });
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPlansPage');
  }

}
