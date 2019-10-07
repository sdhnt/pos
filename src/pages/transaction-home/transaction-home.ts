import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, ToastController } from 'ionic-angular';
import { ListPage } from '../list/list';
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
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionHomePage');
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
  
      message: "Cash Balance: 29000 MMK!",
      duration: 3000
    }).present();
  }

}   
