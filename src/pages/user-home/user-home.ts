import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the UserHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html'
})
export class UserHomePage {

  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
 
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Cours'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Musculation'},
    {data: [18, 28, 60, 29, 86, 37, 90], label: 'Crossfit'}
  ];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserHomePage');
  }

}

