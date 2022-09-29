import { Injectable } from '@angular/core';
import { Beer } from './beer-list/Beer';


//maneja la logica del carrtio 
@Injectable({
  providedIn: 'root'
})
export class BeerCartService {
  
  cartList: Beer[] = [];

  constructor() { }
  
  addToCart(beer: Beer) {
    let item = this.cartList.find((v1)=> v1.name == beer.name);
    if(!item) {
      this.cartList.push({... beer});
    } else {
      item.quantity += beer.quantity;
    }
    console.log(this.cartList);
  }
}