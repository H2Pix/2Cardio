import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the UserClubPlaningLundi page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-club-planing-lundi',
  templateUrl: 'user-club-planing-lundi.html'
})
//  export class UserClubPlaningLundiPage {


  

//   constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {}

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad UserClubPlaningLundiPage');
//   }


// }
export class UserClubPlaningLundiPage {

  private names: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {	
    this.names = [ 'john', 'dixy', 'tom', 'jared']; 
  }
  
  presentConfirm() {
    
    // Object with options used to create the alert
    var options = {
      title: 'Confirmation de réservation',
      message: 'Attention il reste 15 places sur 50 dans ce cours. Souhaitez-vous réserver une place?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log(data);
          }
        }
      ]
    };
    
    //  options.inputs = [];
    
    // // Now we add the radio buttons
    // for(let i=0; i< this.names.length; i++) {
    //   options.inputs.push({ name : 'options', value: this.names[i], label: this.names[i], type: 'radio' });
    // }
  
    // Create the alert with the options
    let alert = this.alertCtrl.create(options);
    alert.present();
  }
}