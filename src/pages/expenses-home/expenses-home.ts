import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExpensesHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expenses-home',
  templateUrl: 'expenses-home.html',
})
export class ExpensesHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    ) {
  }

  prodqty;
  prodcost;
  expirydate=new Date();
  currtime = new Date().toISOString();

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpensesHomePage');
    console.log(this.currtime);
  }

  addinventoryexpense(){

  }

  scanQR(){

  }

}
