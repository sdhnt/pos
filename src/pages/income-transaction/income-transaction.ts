import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Tabs} from 'ionic-angular';
import { AllTransactionPage } from '../all-transaction/all-transaction';
import firebase from 'firebase';
import { CoachBusinesstipsPageModule } from '../coach-businesstips/coach-businesstips.module';

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


  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    
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

}
