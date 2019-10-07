import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Tabs } from 'ionic-angular';
import { IncomeTransactionPage } from '../income-transaction/income-transaction';

/**
 * Generated class for the AllTransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-transaction',
  templateUrl: 'all-transaction.html',
})
export class AllTransactionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllTransactionPage');
    console.log("Size of array: "+this.itemsprice.length)
    if(this.itemsprice.length>0)
    {
      this.showSampleRec=false;
      this.flag_mode=1;
    }
  }

  result = "";
  flag_mode=0;
  showSampleRec=true;
  itemsprice: string[] = [] ;
  ctr=0;
  lastsum=0;
  lastchar="NIL"
  lastdigit=0;

	ngOnInit() {
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
  }

  createRec(){
    //Nav to Rec Page
    //Build Expand Feature on REC Page
    //this.events.publish('genRec:created', this.itemsprice);
    //this.navCtrl.push(CalculatorPage);

    //(this.navCtrl.parent as Tabs).select(1);

    
    var myJsonString = JSON.stringify(this.itemsprice);

    var tempJSON={"itemslist":[],};

    

    

    this.itemsprice.forEach((element, index) => {

      tempJSON.itemslist.push(
        {'name': "Blank_Item",
        'price': parseInt(element),
        'qty': 0,
        })      
    });


    var sampledat={ 'itemslist': myJsonString,};

    const myObjStr = JSON.stringify(tempJSON);
    

    (this.navCtrl.parent as Tabs).select(2);
    this.delay(300).then(any=>{
      this.events.publish('genRec:created', myObjStr);
    
    console.log("Sent: "+ myObjStr);
    
      //your task after delay.
    });

    //this.navCtrl.push(IncomeTransactionPage , myObjStr);
    
    
    //this.events.publish('genRec:created', myObjStr);
    //console.log("Sent1: "+ myObjStr);
  
  }
  

	btnClicked(btn) {
		console.log('CalculatorPage::btnClicked = ' + btn);
		if (btn == "C") {
      this.result = "";
      this.itemsprice=[];this.lastsum=0;
		} else if (btn == "=") {
      this.showSampleRec=true;

       //IF LAST = character then remove that character 

      var answ=this.result.split('+');
      this.itemsprice=this.itemsprice.concat(answ);
      
        //flag_mode=0 means normal (sample reciept is generated)
        //if(flag_mode==1) then go to reciept page directly - call createRec()
        //if(flag_mode=2) then just use as calc - no reciept is generated
  
      console.log(this.itemsprice)
      this.result = eval(this.result)+"";
      this.lastsum=parseInt(this.result);
    } else if (btn == "b")
    {
      this.result =this.result.substring (0,this.result.length-1);
    }
    else if (btn == "squareroot") {
			this.result = Math.sqrt(eval(this.result)) + "";
		} else if (btn == "square") {
			this.result = eval("(" + this.result + ") * ( " + this.result + ")");
		} else if (btn == "reciproc") {
			this.result = eval(1 + "/ (" + this.result + ")");
		} else {
      if(parseInt(this.result)==this.lastsum){
        this.result=this.result.substring(0,0);
      }

      



      
      console.log("Lastchar: "+this.lastchar+" Result: "+this.result)

      

      if((btn=='+'||btn=='-'||btn=='*'||btn=='/') && (this.lastchar=='+'||this.lastchar=='-'||this.lastchar=='*'||this.lastchar=='/')  )
      {
        this.result=this.result =this.result.substring (0,this.result.length-1); 
      }
      this.lastchar=btn;
      this.result += btn;
			
		}
	}

}
