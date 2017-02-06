import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserClubHorairePage } from '../user-club-horaire/user-club-horaire';
import { UserClubPlaningPage } from '../user-club-planing/user-club-planing';
// import { Ionic2Rating } from 'ionic2-rating';

/*
  Generated class for the UserClub page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-club',
  templateUrl: 'user-club.html',
  // directives: [Ionic2Rating]
})
export class UserClubPage {

 horaire = UserClubHorairePage;
 planing = UserClubPlaningPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  //  private rate = 2.5; 
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserClubPage');
  }

}
