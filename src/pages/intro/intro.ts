import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { IntroAccueil } from '../intro_accueil/intro_accueil';

@Component({
  selector: 'intro',
  templateUrl: 'intro.html'
})
export class Intro {
  go = IntroAccueil;

  constructor(public navCtrl: NavController) {
    
  }

}
