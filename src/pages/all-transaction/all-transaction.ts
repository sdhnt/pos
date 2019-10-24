import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Tabs } from 'ionic-angular';
import { IncomeTransactionPage } from '../income-transaction/income-transaction';
import firebase from 'firebase';

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


    this.events.subscribe('addRecCalc:created',(data) => {
      console.log("ENTERED!");
      console.log("Received 0 " + data);
      //SET itemsprice here? - make new addgen - diff button calls diff event that pushes rather than replaces
      //Same for Product Transaction Page
      //console.log(this.showSampleRec);
      var tempdat= JSON.parse(data); 
      // this.itemsname=null;
      // this.itemsprice=null;
      // this.itemsqty=null;
      tempdat.forEach(element => {

        this.itemsname.push(element.name)
        this.itemsprice.push(element.price);
        this.itemsqty.push(element.qty)
        
      });
      console.log(this.itemsprice)
    });
    

    this.getUserData();
  }
  itemsname: string[] = [];

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
  itemsqty: number[] = [];
  ctr=0;
  lastsum=0;
  lastchar="NIL"
  lastdigit=0;

	ngOnInit() {
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
  businesstype: "",
  taxrate: 0.0,
  discount: 0.0,
 
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

  createRec(){
    var tempJSON={"itemslist":[],};

    this.itemsprice.forEach((element, index) => {

      if(this.itemsname.length>0 && index<this.itemsname.length){
        tempJSON.itemslist.push(
          {'name': this.itemsname[index],
          'price': parseInt(element),
          'qty': this.itemsqty[index],
          }) 

      }
      else{
        tempJSON.itemslist.push(
          {
          'code': '000000',
          'cat': 'NIL',
          'stock_qty': 0,
          'name': "ထုတ်ကုန်",
          'price': parseInt(element),
          'qty': this.itemsqty[index],
          }) 
      }

          
    });


    //var sampledat={ 'itemslist': myJsonString,};

    const myObjStr = JSON.stringify(tempJSON);
    

    (this.navCtrl.parent as Tabs).select(2);
    this.delay(300).then(any=>{
      this.events.publish('genRec:created', myObjStr);
    
    console.log("Sent: "+ myObjStr);
    
      //your task after delay.
    });

    this.result = "";
    this.itemsname=[];
    this.itemsprice=[];this.lastsum=0;
    this.itemsqty=[];
  
  }
  

	btnClicked(btn) {

    try {

      console.log('CalculatorPage::btnClicked = ' + btn);
		if (btn == "C") {
      this.result = "";
      this.itemsprice=[];this.lastsum=0;
      this.itemsqty=[];
		} else if (btn == "=") {
      this.showSampleRec=true;

       //IF LAST = character then remove that character 

      var answ=this.result.split('+');
      var temp;

      answ.forEach((element, index) => {

        if(element.includes("*")){
          answ[index]=element.substring(0, element.indexOf("*"))
          this.itemsprice.push(answ[index])
          temp=parseInt(element.substring(element.indexOf("*")+1));
          console.log(element.substring(element.indexOf("*")+1))
          this.itemsqty.push(temp);

        }
        else
        {
          if(element!=""){
            this.itemsprice.push(element);
            this.itemsqty.push(parseInt("1"));  
          }
        }

        // this.itemsprice.push(
        //   {'name': "Blank_Item",
        //   'price': parseInt(element),
        //   'qty': 0,
        //   })      
      });
        //flag_mode=0 means normal (sample reciept is generated)
        //if(flag_mode==1) then go to reciept page directly - call createRec()
        //if(flag_mode=2) then just use as calc - no reciept is generated
  
      console.log(this.itemsprice)
      console.log(this.itemsqty)
      this.result = eval(this.result)+"";
      this.lastsum=0;
      //this.lastsum=parseInt(this.result);
      for(let i = 0; i < this.itemsprice.length; i++){
        this.lastsum  = this.lastsum + (parseInt(this.itemsprice[i])*this.itemsqty[i]);
        console.log(this.lastsum)
      } 
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
    catch(err) {

      this.result="Input Error!"
      this.itemsprice=[];this.lastsum=0;
      this.itemsqty=[];
      
    }
    finally {
      
    }
		
	}

}
