import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Tabs, ToastController, DateTime} from 'ionic-angular';
import { AllTransactionPage } from '../all-transaction/all-transaction';
import firebase from 'firebase';
import { CoachBusinesstipsPageModule } from '../coach-businesstips/coach-businesstips.module';
import { StorageProvider } from '../../providers/storage/storage';

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
    public sp: StorageProvider, public toastCtrl: ToastController) {
    
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
    this.datastore.itemslist[index].qty=this.datastore.itemslist[index].qty+1;

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
  
      message: "Receipt Cancelled",
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
            message: 'Added new Transaction',
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

  }

  addSingleProd(){

  }

  addProdList(){


  }

  printRec(){

    this.toastCtrl.create({
  
      message: "This feature will be enabled soon",
      duration: 2000,
    }).present();

  }

}
