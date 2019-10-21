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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductCategoryPage');
    this.getCategories();
  }

  newprodCat: any ="";
  listCat : any;
  getCategories(){
    //console.log(this.listCat + " and "+this.newprodCat);
    this.sp.storageReady().then(() => {
      this.sp.getCategories().then((val) => {
       this.listCat = JSON.parse(val);
        //console.log("Addprodpg: "+this.listCat)
        this.getCategories();
      }).catch(err => {
        alert("Error: "+ err);
      })
    })
  }

  addCategory(){
    //console.log(this.listCat + " and "+this.newprodCat);
    if(this.newprodCat!=""){
    const data = {
      "name": this.newprodCat,
    };
    this.sp.storageReady().then(() => {
      this.sp.addCategory(data);
      setTimeout(()=> {
        let toast = this.toastCtrl.create({
          message: 'ပြီးပြီ',
          duration: 3000
        });
        this.newprodCat="";


        //this.navCtrl.push(ProductListPage);
        //this.events.publish('prodAdd:created',0);
       // (this.navCtrl.parent as Tabs).select(0);
        toast.present();
      },1000)        
    })
  }
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

    if(this.newprodCat!=""){
      this.addCategory();
      this.prodCat=this.newprodCat;
    }
    const data = {
      "code": this.prodCode,
      "name": this.prodName,
      "price": this.prodPrice,
      "cost": this.prodCost,
      "cat": this.prodCat,
    };

    console.log(data);
  
   

    this.sp.storageReady().then(() => {
      this.sp.addProduct(data);
      setTimeout(()=> {
        let toast = this.toastCtrl.create({
          message: 'ပြီးပြီ',
          duration: 3000
        });
        this.prodCode="";
        this.prodName="";
        this.prodPrice=0;   
        this.prodCat="";
        this.prodCost=0;

        //this.navCtrl.push(ProductListPage);
        this.events.publish('prodAdd:created',0);
        (this.navCtrl.parent as Tabs).select(0);
        toast.present();
      },1000)        
    })
  }
}
