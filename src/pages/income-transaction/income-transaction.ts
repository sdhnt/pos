import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Tabs} from 'ionic-angular';
import { AllTransactionPage } from '../all-transaction/all-transaction';

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
    
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomeTransactionPage');
    
      this.events.subscribe('genRec:created',(data) => {
      console.log("ENTERED!");
      console.log("Received 0 " + data);
      var JSONitems=JSON.parse(data);
      this.datastore=JSONitems;
    });
  
}


    
  


  result = "";
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

}
