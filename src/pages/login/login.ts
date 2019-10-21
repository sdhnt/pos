import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from 'firebase';
import { DashboardPage } from '../dashboard/dashboard';
import {SignUpPage} from '../sign-up/sign-up';
import { TransactionHomePage } from '../transaction-home/transaction-home';
import { StorageProvider } from '../../providers/storage/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string="";
  password: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public sp: StorageProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  
  login(){




 
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then( (user) => {
      console.log(user)
    this.toastCtrl.create({
  
      message: "ကြိုဆိုပါတယ် " + user.user.displayName,
      duration: 3000
    }).present();

    this.sp.clearMem();
    this.sp.setMem();
  
    this.navCtrl.setRoot(TransactionHomePage);
    
  
  
    }).catch( (err) => {console.log(err)
      this.toastCtrl.create({
  
      message: err.message,
      duration: 3000
    }).present();
  
  
  
  
    })
    }

    loginAction(){
      this.toastCtrl.create({
        message: "အင်္ဂါရပ်မကြာမီဖွင့်ပါလိမ့်မည်",
        duration: 2000,
      }).present();
    }
    
    gotoSignUp(){
  
    this.navCtrl.push(SignUpPage)
  
    }
  

}
