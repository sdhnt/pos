import { Component } from '@angular/core';
import { NavController, NavParams, Tabs, Events } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorageProvider} from '../../providers/storage/storage';
import { ListPage } from '../list/list';
import { ToastController } from 'ionic-angular';
import { ProductListPage } from '../product-list/product-list';

@Component({
  selector: 'page-add-product',
  templateUrl: 'addproduct.html'
})
export class AddProductPage {

  prodCode: any = "";
  prodName: any = "";
  prodPrice: number = 0;
  prodCost: number = 0;
  prodCat: any = "";
  newprodCat : any = "";
  listProduct: any;

  constructor(public navCtrl: NavController,
              public barcodeScanner: BarcodeScanner,
              public navParams: NavParams,
              public sp: StorageProvider,
              public toastCtrl: ToastController,
              public events: Events
              ) {
                this.prodCode = this.navParams.get("code");
  }
  addCat(){
    

  }

  addProdPic(){
    
  }

  scanQR(){
    this.barcodeScanner.scan().then(barcodeData => {
        //this.prodCode = barcodeData.text;
        this.navCtrl.setRoot(AddProductPage,{code: barcodeData.text})
    }).catch(err => {
        console.log('Error', err);
    });
  }

  addproduct(){
    const data = {
      "code": this.prodCode,
      "name": this.prodName,
      "price": this.prodPrice,
      "cost": this.prodCost,
      "cat": this.prodCat,
    };
  
   

    this.sp.storageReady().then(() => {
      this.sp.addProduct(data);
      setTimeout(()=> {
        let toast = this.toastCtrl.create({
          message: 'Added new Product',
          duration: 3000
        });
        this.prodCode="";
        this.prodName="";
        this.prodPrice=0;        
        //this.navCtrl.push(ProductListPage);
        this.events.publish('prodAdd:created',0);
        (this.navCtrl.parent as Tabs).select(0);
        toast.present();
      },1000)        
    })
  }
}
