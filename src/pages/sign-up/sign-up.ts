import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { DashboardPage } from '../dashboard/dashboard';


/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  
	name: string="";
	email: string="";
	password: string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  
  signup(){
  	firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
  	(data) 	=> {

  		let newUser: firebase.User = data.user;
  		newUser.updateProfile({
  		displayName: this.name,
  		photoURL: ""
  		}).then( (res) =>{
  		console.log("Profile Updated")
      this.alertCtrl.create({
      title: "Account Created",
      message: "Your account has been created successfully.",
      buttons:[{

      text: "OK",
      handler: () => {
        this.navCtrl.setRoot(DashboardPage)//navigate to feeds page
      }//end handler
      }]//end button

      }).present();
      
  		}).catch((err)=>{
  		console.log(err)});
  		
  	}).catch( (err) => {
  		console.log(err)
    this.toastCtrl.create({

    message: err.message,
    duration: 3000
  }).present();


  	});

  }

  goBack(){
  this.navCtrl.pop();
  }



}
