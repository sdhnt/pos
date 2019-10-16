import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, ToastController } from 'ionic-angular';
import { ListPage } from '../list/list';
import firebase from 'firebase';
import { AddProductPage } from '../addproduct/addproduct';
import { AllTransactionPage } from '../all-transaction/all-transaction'
import { IncomeTransactionPage } from '../income-transaction/income-transaction';
import { ExpenseTransactionPage } from '../expense-transaction/expense-transaction';
import { CalculatorPage } from '../calculator/calculator';
import { TransactionProductPage } from '../transaction-product/transaction-product';

/**
 * Generated class for the TransactionHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-home',
  templateUrl: 'transaction-home.html',
})
export class TransactionHomePage {

  @ViewChild('myTabs') tabRef: Tabs;

  AllTransactions = AllTransactionPage;
  IncomeTransactions = IncomeTransactionPage;
  //ExpenseTransactions = ExpenseTransactionPage;
  ExpenseTransactions = TransactionProductPage;
  
  //Calculator = CalculatorPage;

  //@ViewChild('transactionTabs') tabRef: Tabs;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,) {
    this.getUserData();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionHomePage');
  }

  userdata: any;
  async getUserData(){
    console.log(firebase.auth().currentUser.uid);
    var ud;
    const snapshot = await firebase.firestore().collection('users').where("owner","==",firebase.auth().currentUser.uid).get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data());
          ud=doc.data();
          //this.userdata=doc.data();
          
      });
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });
  this.userdata=ud;
  console.log(this.userdata);
    
 }


  openCalc(){
    //this.navCtrl.push(CalculatorPage);
    this.tabRef.select(3);
  }

  uploadbtn(){
    this.toastCtrl.create({
  
      message: "Online back-up completed!",
      duration: 2000
    }).present();
  }

  cashbtn(){
    this.toastCtrl.create({
  
      message: "Cash Balance: " + this.userdata.cash_balance,
      duration: 3000
    }).present();
  }

}   
