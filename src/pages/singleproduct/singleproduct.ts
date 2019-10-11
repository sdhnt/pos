import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorageProvider} from '../../providers/storage/storage';
import { ListPage } from '../list/list';
import { ToastController } from 'ionic-angular';
import { ProductListPage } from '../product-list/product-list';

@Component({
  selector: 'page-single-product',
  templateUrl: 'singleproduct.html'
})
export class SingleProductPage {

  prodCodeOld: any;
  product: any;


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
              private toastCtrl: ToastController
              ) {
    this.product = this.navParams.get("data");
    this.prodCodeOld = this.product.code;
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
          message: 'Added new Category',
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


  scanQR(){
    this.barcodeScanner.scan().then(barcodeData => {
        //this.prodCode = barcodeData.text;
        this.navCtrl.setRoot(SingleProductPage,{code: barcodeData.text})
    }).catch(err => {
        console.log('Error', err);
    });
  }

  updateProduct(){
    if(this.newprodCat!=""){
      this.addCategory();
      this.product.cat=this.newprodCat;
    }
    const data = {
      "code": this.product.code,
      "name": this.product.name,
      "price": this.product.price,
      "cost": this.product.cost,
      "cat": this.product.cat,
    };

    this.sp.updateProduct(data, this.prodCodeOld).then(()=>{
      setTimeout(() => {
        let toast = this.toastCtrl.create({
          message: "Product Updated !!",
          duration: 2000
        });
        toast.present();
        this.navCtrl.setRoot(ProductListPage);
      }, 1000)
      this.prodCode="";
    })
  }

  deleteproduct(data){
    this.sp.storageReady().then(() => {
      this.sp.deleteProduct(data);
      setTimeout(() => {
        let toast = this.toastCtrl.create({
          message: "Product Deleted !!",
          duration: 2000
        });
        toast.present();
        this.navCtrl.setRoot(ProductListPage);
      }, 1000)
    }).catch(err => {
      console.log(err)
    });
  }
}
