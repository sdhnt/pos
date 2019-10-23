import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';

import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ListPage } from '../pages/list/list';
import { AddProductPage } from '../pages/addproduct/addproduct';
import { SingleProductPage } from '../pages/singleproduct/singleproduct';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { StorageProvider } from '../providers/storage/storage';
import { IonicStorageModule } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { GettersetterProvider } from '../providers/gettersetter/gettersetter';
import { Camera, CameraOptions } from '@ionic-native/camera'; 


import * as firebase from 'firebase';
import { TransactionHomePage } from '../pages/transaction-home/transaction-home';
import { AllTransactionPage } from '../pages/all-transaction/all-transaction';
import { ExpenseTransactionPage } from '../pages/expense-transaction/expense-transaction';
import { IncomeTransactionPage } from '../pages/income-transaction/income-transaction';
import { CalculatorPage } from '../pages/calculator/calculator';
import { SummaryHomePage } from '../pages/summary-home/summary-home';
import { CoachHomePage } from '../pages/coach-home/coach-home';
import { CoachGoalsPage } from '../pages/coach-goals/coach-goals';
import { CoachCoachPage } from '../pages/coach-coach/coach-coach';
import { CoachBusinesstipsPage } from '../pages/coach-businesstips/coach-businesstips';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { TransactionProductPage } from '../pages/transaction-product/transaction-product';
import { ProductListPage } from '../pages/product-list/product-list';
import { AddProductCategoryPage } from '../pages/add-product-category/add-product-category';



// var config = {
//   apiKey: "AIzaSyADjIbI3_GRS4eRHGVGFsT2hrkKvH9K06M",
//   authDomain: "trialapp-1cb3d.firebaseapp.com",
//   databaseURL: "https://trialapp-1cb3d.firebaseio.com",
//   projectId: "trialapp-1cb3d",
//   storageBucket: "trialapp-1cb3d.appspot.com",
//   messagingSenderId: "591467524421"
// };
var config = {
  apiKey: "AIzaSyBlxUkCX8OPsb9QL2p_jN8vaHdb5LhsS7A",
  authDomain: "open-fintech.firebaseapp.com",
  databaseURL: "https://open-fintech.firebaseio.com",
  projectId: "open-fintech",
  storageBucket: "open-fintech.appspot.com",
  messagingSenderId: "1001643033524",
  appId: "1:1001643033524:web:f0fafa6564e26bb41368e1",
  measurementId: "G-CECMRG504L"
};

firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    ListPage,
    AddProductPage,
    SingleProductPage,
    LoginPage,
    SignUpPage,
    TransactionHomePage,
    AllTransactionPage,
    ExpenseTransactionPage,
    IncomeTransactionPage,
    CalculatorPage,
    SummaryHomePage,
    CoachHomePage,
    CoachGoalsPage,
    CoachCoachPage,
    CoachBusinesstipsPage,
    ContactUsPage,
    TransactionProductPage,
    ProductListPage,
    AddProductCategoryPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    ListPage,
    AddProductPage,
    SingleProductPage,
    LoginPage,
    SignUpPage,
    TransactionHomePage,
    ExpenseTransactionPage,
    IncomeTransactionPage,
    AllTransactionPage,
    CalculatorPage,
    CoachHomePage,
    SummaryHomePage,
    CoachGoalsPage,
    CoachCoachPage,
    CoachBusinesstipsPage,
    ContactUsPage,
    TransactionProductPage,
    ProductListPage,
    AddProductCategoryPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StorageProvider,
    BarcodeScanner,
    IonicStorageModule,
    ToastController,
    GettersetterProvider,
    Camera,
  ]
})
export class AppModule {}
