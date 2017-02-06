import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

import { UserClubPlaningLundiPage } from '../user-club-planing-lundi/user-club-planing-lundi';
import { UserClubPlaningMardiPage } from '../user-club-planing-mardi/user-club-planing-mardi';
import { UserClubPlaningMercrediPage } from '../user-club-planing-mercredi/user-club-planing-mercredi';
import { UserClubPlaningJeudiPage } from '../user-club-planing-jeudi/user-club-planing-jeudi';
import { UserClubPlaningVendrediPage } from '../user-club-planing-vendredi/user-club-planing-vendredi';
import { UserClubPlaningSamediPage } from '../user-club-planing-samedi/user-club-planing-samedi';
import { UserClubPlaningDimanchePage } from '../user-club-planing-dimanche/user-club-planing-dimanche';



@Component({
  selector: 'page-user-club-planing',
  templateUrl: 'user-club-planing.html'
})
export class UserClubPlaningPage {

  Lundi: any = UserClubPlaningLundiPage;
  Mardi: any = UserClubPlaningMardiPage;
  Mercredi: any = UserClubPlaningMercrediPage;
  Jeudi: any = UserClubPlaningJeudiPage;
  Vendredi: any = UserClubPlaningVendrediPage;
  Samedi: any = UserClubPlaningSamediPage;
  Dimanche: any = UserClubPlaningDimanchePage;


  selectedTabIndex: number = 1;
  tabsColor: string = "default";
  tabsMode: string = "md";
  tabsPlacement: string = "top";


  constructor(private toastCtrl: ToastController, navCtrl: NavController, public navParams: NavParams) {

  }

  selectTab(index: number) {
    this.selectedTabIndex = index;
  }

  presentChangeOrendationToast() {
    let toast = this.toastCtrl.create({
      message: 'Rotate screen to rerendering.',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


  // constructor(public navCtrl: NavController, public navParams: NavParams) {}

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad UserClubPlaningPage');
  // }

}


