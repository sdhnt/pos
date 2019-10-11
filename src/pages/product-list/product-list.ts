import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { SingleProductPage } from '../singleproduct/singleproduct';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  listProducts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public sp: StorageProvider, public events: Events) {

    this.events.subscribe('prodAdd:created',(data) => {
      console.log("ENTERED!");
      console.log("Received 0 " + data);
      this.getProducts();
    
    });
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.getProducts();
  }
  backBtn(){
      //Hide back btn if src is tab
      this.navCtrl.pop();
    
  }
 
  getProducts(){
    this.sp.storageReady().then(() => {
      this.sp.getProducts().then((val) => {
        //alert(val);
        this.listProducts = JSON.parse(val);
      }).catch(err => {
        alert("Error: "+ err);
      })
    })
  }

  singleProduct(data){
    this.navCtrl.setRoot(SingleProductPage, {'data': data});
  }

}
