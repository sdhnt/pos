import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable() 
export class StorageProvider {

  //
  products: any = [];
  categories : any = [];

  static get parameters() {
    return [[Storage]];
  }
  

  constructor(
    private storage: Storage,
              ) {
              }


  addCategory(data){
    this.storage.ready().then(() => {
      this.storage.get('categories').then((val) => {
        if(val === null){
          this.storage.set('categories', "[]").then(() => {
            this.storage.get('categories').then((valNull) => {
              this.categories = JSON.parse(valNull);
              this.categories.push(data);
              this.storage.set('categories', JSON.stringify(this.categories));
            })
          })
        }else{
          this.categories = JSON.parse(val);
          this.categories.push(data);
          this.storage.set('categories', JSON.stringify(this.categories));
        }
        //this.products = JSON.stringify(this.products)
      }).catch(err => {
        alert(err);
      })
    })
  }

  addProduct(data){
    this.storage.ready().then(() => {
      this.storage.get('products').then((val) => {
        if(val === null){
          this.storage.set('products', "[]").then(() => {
            this.storage.get('products').then((valNull) => {
              this.products = JSON.parse(valNull);
              this.products.push(data);
              this.storage.set('products', JSON.stringify(this.products));
            })
          })
        }else{
          this.products = JSON.parse(val);
          this.products.push(data);
          this.storage.set('products', JSON.stringify(this.products));
        }
        //this.products = JSON.stringify(this.products)
      }).catch(err => {
        alert(err);
      })
    })
  }

  getProducts(){
    return this.storage.get('products');
  }

  getCategories(){ 
    return this.storage.get('categories');
  }

  searchProduct(barcode){
    let needle = null;
    return new Promise((resolve, reject) => {
      this.storage.ready().then(() => {
        this.storage.get('products').then((val) => {
          if(val != null){
            this.products = JSON.parse(val);
            needle = this.products.filter((product) => {
              return (product.code === barcode);
            })
          }
          
          resolve(needle);
        }).catch(err => {
          alert(err+1);
        })
      })
    })
  }

  updateProduct(data, old_code){
    let except = null;
    return new Promise ((resolve, reject) => {
      this.storage.get('products').then((val) => {
        if(val != null){
          this.products = JSON.parse(val);
          except = this.products.filter((product) => {
            return (product.code != old_code);
          });
          except.push(data);
          this.storage.set('products', JSON.stringify(except));
          resolve();
        }
      })

    })
  }

  deleteProduct(data){
    this.storage.ready().then(() => {
      this.storage.get('products').then((val) => {
        this.products = JSON.parse(val);
        let arr = [];
        let arr2 = [];
        arr = this.products;
        arr2 = arr.filter((val) => {
          return (val.code != data.code && val.name != data.name);
        })
        this.storage.set('products', JSON.stringify(arr2));
      }).catch(err => {
        alert(err+1);
      })
    })
  }

  deleteCategory(data){
    this.storage.ready().then(() => {
      this.storage.get('categories').then((val) => {
        this.categories = JSON.parse(val);
        let arr = [];
        let arr2 = [];
        arr = this.categories;
        arr2 = arr.filter((val) => {
          return (val.name != data.name);
        })
        this.storage.set('categories', JSON.stringify(arr2));
      }).catch(err => {
        alert(err+1);
      })
    })
  }

  storageReady(){
    return this.storage.ready();
  }

}
