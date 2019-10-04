import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events} from 'ionic-angular';

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

    
    console.log("Recieved" + this.navParams.get('itemslist'));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncomeTransactionPage');
    this.events.subscribe('genRec:created', (data) => {
      console.log("Received" + data);
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
