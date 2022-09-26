import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  quantity!: number;
  
  @Input()
  max!: number;
  
  @Output()
  quantityChange: EventEmitter <number> = new EventEmitter <number>(); //emisor de eventos
  
  
  @Output()
  maxReached: EventEmitter <string> = new EventEmitter <string>(); //emisor de eventos
  // maxreached es un evento que vamos a emitir cada vez q el stock llegue al max 
  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity); //cambia la cantidad -- emite el evento 
      //this.quantitity es el v alor nuevo que va a tomar, si no le decimos nada toma el evento por defecto 
    } else 
      this.maxReached.emit("se alcanzo el max");
  }
  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
    
  }
  
  changeQuantity( event: { key: any; }): void {
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }
}
