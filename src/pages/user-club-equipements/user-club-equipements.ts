import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';

import { UserClubEquipementsHautCorpsPage } from '../user-club-equipements-haut-corps/user-club-equipements-haut-corps';
import { UserClubEquipementsBasCorpsPage } from '../user-club-equipements-bas-corps/user-club-equipements-bas-corps';
import { UserClubEquipementsTorseCorpsPage } from '../user-club-equipements-torse-corps/user-club-equipements-torse-corps';
import { UserClubEquipementsChargeLibrePage } from '../user-club-equipements-charge-libre/user-club-equipements-charge-libre';


/*
  Generated class for the UserPlaning page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'user-club-equipements',
  templateUrl: 'user-club-equipements.html'
})
export class UserClubEquipementsPage {
  HdC: any = UserClubEquipementsHautCorpsPage;
  BdC: any = UserClubEquipementsBasCorpsPage;
  PdC: any = UserClubEquipementsTorseCorpsPage;
  Clibre: any = UserClubEquipementsChargeLibrePage;



  selectedTabIndex: number = 1;
  tabsColor: string = "default";
  tabsMode: string = "md";
  tabsPlacement: string = "top";


  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}
    
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

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad UserClubEquipementsPage');
  // }
}


