import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Intro } from '../pages/intro/intro';
import { UserClubPage } from '../pages/user-club/user-club';
import { UserClubEquipementsPage } from '../pages/user-club-equipements/user-club-equipements';
import {UserPlansPage} from '../pages/user-plans/user-plans';
import { ShuffleProgrammePage } from '../pages/shuffle-programme/shuffle-programme';
import { FlashProgrammePage } from '../pages/flash-programme/flash-programme';
import { UserProgressPage } from '../pages/user-progress/user-progress';
import { UserNutritionPage } from '../pages/user-nutrition/user-nutrition';
import { UserReservationPage } from '../pages/user-reservation/user-reservation';
import { UserPlaylistsPage } from '../pages/user-playlists/user-playlists';
import { UserParametresPage } from '../pages/user-parametres/user-parametres';
import { UserHomePage } from '../pages/user-home/user-home';
import { UserClubPassCardPage } from '../pages/user-club-pass-card/user-club-pass-card';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Intro;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component:UserHomePage, icon:'home' },
      { title: 'Club', component: UserClubPage, icon: 'nuclear'  },
      { title: 'Pass', component: UserClubPassCardPage, icon: 'card'  },
      { title: 'Equipements', component: UserClubEquipementsPage, icon: 'cube'  },
      { title: 'Plan d\'entrainement', component: UserPlansPage, icon: 'calendar'  },
      { title: 'Générer un programme', component: ShuffleProgrammePage, icon:'shuffle'},
      { title: 'Flasher un programme', component: FlashProgrammePage, icon:'qr-scanner'},
      { title: 'Progression', component: UserProgressPage, icon:'pulse'},
      { title: 'Nutrition', component: UserNutritionPage, icon:'nutrition'},
      { title: 'Réservation', component: UserReservationPage, icon:'timer'},
      { title: 'Playlists', component: UserPlaylistsPage, icon:'musical-notes'},
      { title: 'Paramétres', component: UserParametresPage, icon:'settings'},


    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
