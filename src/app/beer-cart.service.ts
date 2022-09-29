import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from './beer-list/Beer';


//maneja la logica del carrtio 
@Injectable({
  providedIn: 'root'
})


export class BeerCartService {
  //convertimos la varaible a observar en privada 
  private _cartList: Beer[] = [];
  //Encapusalmos la variable para suscribir 
  cartList: BehaviorSubject <Beer[]> = new BehaviorSubject(this._cartList);

  constructor() { }
  //logica del carrito
  addToCart(beer: Beer) {
    let item = this._cartList.find((v1)=> v1.name == beer.name);
    if(!item) {
      this._cartList.push({... beer});
    } else {
      item.quantity += beer.quantity;
    }
    console.log(this._cartList);
    //equivale al emitt de eventos 
    this.cartList.next(this._cartList); 
    //actualizo el valor y lo notifico
  }
}