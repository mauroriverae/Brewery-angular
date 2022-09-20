import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beer = {
    "name": "negra fuerte",
    "type": "porter",
    "price": 123,
    "stock": 5,
    "image": "assets/porter.jpg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
