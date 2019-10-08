import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';

import * as firebase from 'firebase';
import { TransactionHomePage } from '../pages/transaction-home/transaction-home';
import { SummaryHomePage } from '../pages/summary-home/summary-home';
import { CoachHomePage } from '../pages/coach-home/coach-home';
import { ContactUsPageModule } from '../pages/contact-us/contact-us.module';
import { ContactUsPage } from '../pages/contact-us/contact-us';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public toastCtrl: ToastController) {
    this.initializeApp();

    this.pages = [
      { title: 'Sales', component: TransactionHomePage },
      { title: 'Business', component: SummaryHomePage },
      { title: 'Products', component: DashboardPage },
      { title: 'Coach', component: CoachHomePage },
      { title: 'Help', component: ContactUsPage },
    ];

  }

  
  logout(){

    firebase.auth().signOut().then(()=>{
      this.toastCtrl.create({
        message: "You have been logged out",
        duration: 3000
      }).present()
      this.nav.setRoot(LoginPage);
    });

  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}