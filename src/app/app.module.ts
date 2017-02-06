import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { Intro } from '../pages/intro/intro';
import { IntroAccueil } from '../pages/intro_accueil/intro_accueil';
import {IntroInfoPage} from '../pages/intro_info/intro_info';
import {LoginPage} from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';
import {Signup2Page} from '../pages/signup2/signup2';
import {Signup3Page} from '../pages/signup3/signup3';
import {Signup4Page} from '../pages/signup4/signup4';
import {Signup5Page} from '../pages/signup5/signup5';
import {UserClubPage} from '../pages/user-club/user-club';
import { UserClubPassCardPage } from '../pages/user-club-pass-card/user-club-pass-card';
import {UserClubEquipementsPage} from '../pages/user-club-equipements/user-club-equipements';
import {ShuffleProgrammePage} from '../pages/shuffle-programme/shuffle-programme';
import { ShuffleProgrammeLevelPage } from '../pages/shuffle-programme-level/shuffle-programme-level';
import { ShuffleProgrammeResultPage } from '../pages/shuffle-programme-result/shuffle-programme-result';
import {FlashProgrammePage} from '../pages/flash-programme/flash-programme';
import { UserHomePage } from '../pages/user-home/user-home';
import { UserProgressPage } from '../pages/user-progress/user-progress';
import { UserNutritionPage } from '../pages/user-nutrition/user-nutrition';
import { UserReservationPage } from '../pages/user-reservation/user-reservation';
import { UserPlaylistsPage } from '../pages/user-playlists/user-playlists';
import { UserParametresPage } from '../pages/user-parametres/user-parametres';
import { UserClubHorairePage } from '../pages/user-club-horaire/user-club-horaire';
import { UserClubPlaningPage } from '../pages/user-club-planing/user-club-planing';
import {UserPlansPage} from '../pages/user-plans/user-plans';
import {UserPlansDetailPage} from '../pages/user-plans-detail/user-plans-detail';

// import Planing Tabs 
import { ScrollableTabs } from '../components/scrollable-tabs/scrollable-tabs';
import { UserClubPlaningLundiPage } from '../pages/user-club-planing-lundi/user-club-planing-lundi';
import { UserClubPlaningMardiPage } from '../pages/user-club-planing-mardi/user-club-planing-mardi';
import { UserClubPlaningMercrediPage } from '../pages/user-club-planing-mercredi/user-club-planing-mercredi';
import { UserClubPlaningJeudiPage } from '../pages/user-club-planing-jeudi/user-club-planing-jeudi';
import { UserClubPlaningVendrediPage } from '../pages/user-club-planing-vendredi/user-club-planing-vendredi';
import { UserClubPlaningSamediPage } from '../pages/user-club-planing-samedi/user-club-planing-samedi';
import { UserClubPlaningDimanchePage } from '../pages/user-club-planing-dimanche/user-club-planing-dimanche';

// import tabs equipements
import { UserClubEquipementsHautCorpsPage } from '../pages/user-club-equipements-haut-corps/user-club-equipements-haut-corps';
import { UserClubEquipementsBasCorpsPage } from '../pages/user-club-equipements-bas-corps/user-club-equipements-bas-corps';
import { UserClubEquipementsTorseCorpsPage } from '../pages/user-club-equipements-torse-corps/user-club-equipements-torse-corps';
import { UserClubEquipementsChargeLibrePage } from '../pages/user-club-equipements-charge-libre/user-club-equipements-charge-libre';




@NgModule({
  declarations: [
    MyApp,
    Intro,
    IntroAccueil,
    IntroInfoPage,
    LoginPage,
    SignupPage,
    Signup2Page,
    Signup3Page,
    Signup4Page,
    Signup5Page,
    UserHomePage,
    UserClubPage,
    UserClubPassCardPage,
    UserClubEquipementsPage,
    ShuffleProgrammePage,
    ShuffleProgrammeLevelPage,
    ShuffleProgrammeResultPage,
    FlashProgrammePage,
    UserProgressPage,
    UserNutritionPage,
    UserReservationPage,
    UserPlaylistsPage,
    UserParametresPage,
    UserClubHorairePage,
    UserClubPlaningPage,
    ScrollableTabs,
    UserClubPlaningLundiPage,
    UserClubPlaningMardiPage, 
    UserClubPlaningMercrediPage, 
    UserClubPlaningJeudiPage, 
    UserClubPlaningVendrediPage, 
    UserClubPlaningSamediPage, 
    UserClubPlaningDimanchePage,
    UserClubEquipementsHautCorpsPage,
    UserClubEquipementsBasCorpsPage,
    UserClubEquipementsTorseCorpsPage,
    UserClubEquipementsChargeLibrePage,
    UserPlansPage,
    UserPlansDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Intro,
    IntroAccueil,
    IntroInfoPage,
    LoginPage,
    SignupPage,
    Signup2Page,
    Signup3Page,
    Signup4Page,
    Signup5Page,
    UserHomePage,
    UserClubPage,
    UserClubPassCardPage,
    UserClubEquipementsPage,
    ShuffleProgrammePage,
    ShuffleProgrammeLevelPage,
    ShuffleProgrammeResultPage,
    FlashProgrammePage,
    UserProgressPage,
    UserNutritionPage,
    UserReservationPage,
    UserPlaylistsPage,
    UserParametresPage,
    UserClubHorairePage,
    UserClubPlaningPage,
    UserClubPlaningLundiPage,
    UserClubPlaningMardiPage, 
    UserClubPlaningMercrediPage, 
    UserClubPlaningJeudiPage, 
    UserClubPlaningVendrediPage, 
    UserClubPlaningSamediPage, 
    UserClubPlaningDimanchePage,
    UserClubEquipementsHautCorpsPage,
    UserClubEquipementsBasCorpsPage,
    UserClubEquipementsTorseCorpsPage,
    UserClubEquipementsChargeLibrePage,
    UserPlansPage,
    UserPlansDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
