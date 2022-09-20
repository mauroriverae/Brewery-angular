import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer'
@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beer: Beer [] = [
    {
      name: "Biter Call Saul",
      type: "IPA",
      price: 180,
      stock: 5,
      image: "assets/porter.jpg",
      clearance: false,
    },
    {
      name: "Red Red Wine",
      type: "Barley Wine",
      price: 200,
      stock: 3,
      image: "assets/porter.jpg",
      clearance: true,
    },
    {
      name: "Yellow Submarine",
      type: "Golden Ale",
      price: 180,
      stock: 0,
      image: "assets/porter.jpg",
      clearance: false,
    },
    {
      name: "Session IPA",
      type: "IPA",
      price: 250,
      stock: 2,
      image: "assets/porter.jpg",
      clearance: false,
    },
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
