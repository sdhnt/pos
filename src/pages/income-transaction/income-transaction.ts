import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Tabs, ToastController, DateTime} from 'ionic-angular';
import { AllTransactionPage } from '../all-transaction/all-transaction';
import firebase from 'firebase';
import { CoachBusinesstipsPageModule } from '../coach-businesstips/coach-businesstips.module';
import { StorageProvider } from '../../providers/storage/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the IncomeTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-income-transaction',
  templateUrl: 'income-transaction.html',
})
export class IncomeTransactionPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, 
    public sp: StorageProvider, public toastCtrl: ToastController,
    private barcodeScanner: BarcodeScanner) {
    
    //console.log("Recieved -1" + this.navParams.get('itemslist'));
    this.getUserData();
    
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

userdata: any = {business_address: "",
  business_name: "",
  cash_balance: "",
  currency: "",
  created: "",
  language: "",
  owner: "", 
  owner_name: "",
  ph_no: "",
}
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



  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomeTransactionPage');
    this.getCategories();
    
      this.events.subscribe('genRec:created',(data) => {
      console.log("ENTERED!");
      console.log("Received 0 " + data);
      var JSONitems=JSON.parse(data);
      this.datastore=JSONitems;
      this.lastsum=0;
      for(let i = 0; i < this.datastore.itemslist.length; i++){
        this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
        console.log(this.lastsum)
      } 
    });
  
}
temp;

qrscan(){
  var curprod;
  this.barcodeScanner.scan().then(barcodeData => {
    this.sp.searchProduct(barcodeData.text).then(val => {
      if(val[0] != null){
        curprod=val[0];
        let toast = this.toastCtrl.create({
          message: "Found Product "+ val[0].name,
          duration: 2000
        });
        toast.present();
        curprod.qty=1;
        this.temp=curprod;

        // addQty(index){
        //   //this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
        //   this.datastore.itemslist[index].qty=parseInt(this.datastore.itemslist[index].qty)+1;  
      
        //   this.lastsum=0;
        //   for(let i = 0; i < this.datastore.itemslist.length; i++){
        //     this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
        //   }
        // }
        this.datastore.itemslist.push(curprod)
        //this.lastsum=this.lastsum+curprod.price;
        this.lastsum=0;
        for(let i = 0; i < this.datastore.itemslist.length; i++){
               this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
           }

      
      }else{
        let toast = this.toastCtrl.create({
          message: "ကုန်ပစ္စည်းမရှိပါ!!!",
          duration: 2000
        });
        toast.present();
      }
    })
  }).catch(err => {
      console.log('Error', err);
  });
}


    
  dispM(){
    console.log("DisM = "+ this.displayManual)
    if(this.displayManual==0)
    {this.displayManual=1;}
    else
    {this.displayManual=0;}
  }




  result = "";
  displayManual=0;
  datastore={'itemslist':[]};
  flag_mode=0;
  showSampleRec=true;
  itemsprice: string[] = [] ;
  ctr=0;
  lastsum=0;
  lastchar="NIL"
  lastdigit=0;

	ngOnInit() {

    //this.itemsprice=JSON.parse(this.dataparm);
  }

  createRec(){
    //Nav to Rec Page
    //Build Expand Feature on REC Page
  }

  removeItem(index){
    //this.lastsum=this.lastsum-(this.datastore.itemslist[index].price*this.datastore.itemslist[index].qty);

    var rem=this.datastore.itemslist.splice(index,1);

    this.lastsum=0;
    for(let i = 0; i < this.datastore.itemslist.length; i++){
      this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
    }
    console.log("I: "+ index)
    console.log(this.datastore.itemslist[index])
    
    
    }

  addQty(index){
    //this.lastsum=this.lastsum+this.datastore.itemslist[index].price;
    this.datastore.itemslist[index].qty=parseInt(this.datastore.itemslist[index].qty)+1;  

    this.lastsum=0;
    for(let i = 0; i < this.datastore.itemslist.length; i++){
      this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
    }
  }

  removeQty(index){
    //this.lastsum=this.lastsum-this.datastore.itemslist[index].price;
    this.datastore.itemslist[index].qty=this.datastore.itemslist[index].qty-1;
    if(this.datastore.itemslist[index].qty==0){
      this.removeItem(index);
    }

    this.lastsum=0;
    for(let i = 0; i < this.datastore.itemslist.length; i++){
      this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
    }
  }

  newItemName: string="";
  newUnitPrice: number=null;
  newUnitQty: number=null;
  newItemCat: string="";

  addNewItem(){

    if(this.newItemName!="" && this.newUnitPrice!=null && this.newUnitQty!=null){

    var newitem={
      name: this.newItemName,
      price: this.newUnitPrice,
      qty: this.newUnitQty,
    }

    this.datastore.itemslist.push(newitem);
    this.newItemCat="";
    this.newItemName="";
    this.newUnitPrice=null;
    this.newUnitQty=null;

    this.lastsum=0;
    for(let i = 0; i < this.datastore.itemslist.length; i++){
      this.lastsum  = this.lastsum + (this.datastore.itemslist[i].price*this.datastore.itemslist[i].qty);
    }
  }


  }


  listProducts: any;
  filteredList: any;
  listArray: any =[];
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

  cancelRec(){
    this.datastore.itemslist=[];
    this.lastsum=0;
    
    this.toastCtrl.create({
  
      message: "ငွေလက်ခံဖြတ်ပိုင်းဖျက်သိမ်းခဲ့သည်",
      duration: 2000,
    }).present();
    
  }

  prodidlist: any=[];
  pnllist: any=[];
  datetime = Date.now();
  tax_vat: any = [];
  discountlist: any=[];

  saveRec(){
    if(this.datastore.itemslist.length==0){     
    }
    else{
      const data = {
        "itemslist": this.datastore.itemslist,
        "totalsum": this.lastsum,
        "prodidlist": this.prodidlist,
        "pnllist": this.pnllist,
        "datetime": this.datetime,
        "tax_vat": this.tax_vat,
        "discountlist": this.discountlist,
      };
      this.sp.storageReady().then(() => {
        this.sp.addTransactions(data);
   
          let toast = this.toastCtrl.create({
            message: 'ပြီးပြီ',
            duration: 3000
          });

      //REFLECT CHANGE ON CASH BALANCE HERE
      
      this.datastore.itemslist=[];
      this.lastsum=0;

      

          toast.present();
      
      })
    }
  }

  addCalc(){

    (this.navCtrl.parent as Tabs).select(0);
    this.delay(300).then(any=>{
      this.events.publish('addRecCalc:created', JSON.stringify(this.datastore.itemslist));//SEND ITEMS PRICE
    
    console.log("Sent: 1332 ");
    
      //your task after delay.
    });


  }

  addSingleProd(item, index){

      
    (this.navCtrl.parent as Tabs).select(1);
    this.delay(300).then(any=>{
      this.events.publish('addSingleProd:created', JSON.stringify(item), JSON.stringify(index),JSON.stringify(this.datastore.itemslist));
    
    console.log("Sent: 1330 ");
    
      //your task after delay.
    });

   
  }

  addProdList(){
    
    (this.navCtrl.parent as Tabs).select(1);
    this.delay(300).then(any=>{
      this.events.publish('addRecProd:created', JSON.stringify(this.datastore.itemslist));
    
    console.log("Sent: 1331 ");
    
      //your task after delay.
    });

  }

  printRec(){

    this.toastCtrl.create({
  
      message: "ဒီအင်္ဂါရပ်မကြာမီဖွင့်ပါလိမ့်မည်",
      duration: 2000,
    }).present();

  }

}
