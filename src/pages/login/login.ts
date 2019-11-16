import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import {SignUpPage} from '../sign-up/sign-up';
import { TransactionHomePage } from '../transaction-home/transaction-home';
import { StorageProvider } from '../../providers/storage/storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public toastCtrl: ToastController, public facebook: Facebook, 
    public sp: StorageProvider, public alertCtrl: AlertController,) {

      //IF email+password or FB exists then login auto
      //this.loginWithFB();
      //Get email&passfromstorageandcalllogin
      //onlogin-saveemailandpassto"userdat"&tologinarray in memory
      
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log(user)// User is signed in.
          alertCtrl.create({
  
            subTitle:"ကြိုဆိုပါတယ် " + user.displayName,
            buttons: [
              {
                text: 'Okay!',
                role: 'cancel',
              }
              ],
          }).present();
    
          sp.clearMem();
          sp.setMem();
        
          navCtrl.setRoot(TransactionHomePage);
        } else {
          // No user is signed in.
          console.log("no-wenis")
        }
      });
    }
  

      ngAfterViewInit(){
        console.log("yolo");
      }

facebookLogin(): Promise<any> {
  return this.facebook.login(['email'])
    .then( response => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then( success => { 
          console.log("Firebase success: " + JSON.stringify(success)); 
        });

    }).catch((error) => { console.log(error) });
}

loginWithFB(){

  this.facebook.login(['email'])
  .then((res: FacebookLoginResponse) =>{
     console.log('Logged into Facebook!', res)

     firebase.auth().signInWithCredential(
          firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken))
          .then( success => {
            console.log("Firebase success" , success);
            var temp=success;
            this.alertCtrl.create({
  
              subTitle:"ကြိုဆိုပါတယ် " + temp.additionalUserInfo.profile['first_name'],
              buttons: [
                {
                  text: 'Okay!',
                  role: 'cancel',
                }
                ],
            }).present();
        
            this.sp.clearMem();
            this.sp.setMem();
          
            this.navCtrl.setRoot(TransactionHomePage);
            
          
          })
          .catch(err => {
            console.log("Firebase error", err);
          });

    })
  .catch(e => console.log('Error logging into Facebook', e));

      // this.facebook.login(['email'])
      // .then((res: FacebookLoginResponse) => {
      //   console.log('Logged into Facebook!', res);
      //   firebase.auth().signInWithCredential(
      //     firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken))
      //     .then( success => {
      //       console.log("Firebase success" , success);
      //       resolve(true);
      //     })
      //     .catch(err => {
      //       console.log("Firebase error", err);
      //       reject(false);
      //     });
      // })
      // .catch(err => {
      //   console.log('Error logging into Facebook',err);
      //   reject(false);
      // });
  


}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  
  login(){

      //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>{
        console.log("yeahh")
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then( (user) => {
        
      this.alertCtrl.create({
  
        subTitle:"ကြိုဆိုပါတယ် " + user.user.displayName,
        buttons: [
          {
            text: 'Okay!',
            role: 'cancel',
          }
          ],
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
        
      
      
      
      });
      //console.log(user)
 
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
