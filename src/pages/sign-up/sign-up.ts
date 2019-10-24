import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { DashboardPage } from '../dashboard/dashboard';
import { AllTransactionPage } from '../all-transaction/all-transaction';
import { TransactionHomePage } from '../transaction-home/transaction-home';



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
  businessname: string="";
  businessaddress: string="";
  businesstype: string="";
  phno: string="";
  language: string="";
  currency: string="";
  cb: number;
  discount: number;
  taxrate: number;
  nextbtn=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public alertCtrl: AlertController) {
    this.nextbtn=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
    this.nextbtn=0;
  }

  nextPg(){
    this.nextbtn=1;
  }
  prevPg(){
    this.nextbtn=0;
  }


  
  signup(){

    this.toastCtrl.create({
      message: "သင်၏ပရိုဖိုင်းကိုဖန်တီးနေစဉ်ခဏစောင့်ပါ...",
      duration: 3000
      
    }).present();
  	firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
  	(data) 	=> {

  		let newUser: firebase.User = data.user;
  		newUser.updateProfile({
  		displayName: this.name,
  		}).then( (res) =>{
      console.log("Profile Updated")

      firebase.firestore().collection("users").add({
        // file_name: this.text,
        created: firebase.firestore.FieldValue.serverTimestamp(),
        owner: firebase.auth().currentUser.uid,
        owner_name: firebase.auth().currentUser.displayName,
        business_name: this.businessname,
        businesstype: this.businesstype,
        business_address: this.businessaddress,
        ph_no: this.phno,
        language: this.language,
        currency: this.currency,
        cash_balance: this.cb,
        discount: this.discount,
        taxrate: this.taxrate,
      }).then(async (doc) => {
        console.log(doc);
      this.alertCtrl.create({
      title: "Account Created",
      message: "သင်၏အကောင့်ကိုအောင်မြင်စွာဖန်တီးလိုက်ပြီ.",
      buttons:[{

      text: "OK",
      handler: () => {
        this.navCtrl.setRoot(TransactionHomePage)//navigate to feeds page
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

  });
}

  goBack(){
  this.navCtrl.pop();
  }



}
