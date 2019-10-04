import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AddProductPage } from '../addproduct/addproduct';
import { AllTransactionPage } from '../all-transaction/all-transaction'
import { IncomeTransactionPage } from '../income-transaction/income-transaction';
import { ExpenseTransactionPage } from '../expense-transaction/expense-transaction';
import { CalculatorPage } from '../calculator/calculator';

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
  ExpenseTransactions = ListPage;
  //Calculator = CalculatorPage;

  //@ViewChild('transactionTabs') tabRef: Tabs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionHomePage');
  }


  openCalc(){
    //this.navCtrl.push(CalculatorPage);
    this.tabRef.select(3);
  }

}   
