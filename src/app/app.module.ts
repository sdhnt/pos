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


import * as firebase from 'firebase';
import { TransactionHomePage } from '../pages/transaction-home/transaction-home';
import { AllTransactionPage } from '../pages/all-transaction/all-transaction';
import { ExpenseTransactionPage } from '../pages/expense-transaction/expense-transaction';
import { IncomeTransactionPage } from '../pages/income-transaction/income-transaction';
import { CalculatorPage } from '../pages/calculator/calculator';


var config = {
  apiKey: "AIzaSyADjIbI3_GRS4eRHGVGFsT2hrkKvH9K06M",
  authDomain: "trialapp-1cb3d.firebaseapp.com",
  databaseURL: "https://trialapp-1cb3d.firebaseio.com",
  projectId: "trialapp-1cb3d",
  storageBucket: "trialapp-1cb3d.appspot.com",
  messagingSenderId: "591467524421"
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

  ]
})
export class AppModule {}
