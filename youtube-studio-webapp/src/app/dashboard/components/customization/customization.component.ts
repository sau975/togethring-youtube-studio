import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent implements OnInit {

  products: IProduct[] = [
    { id: 1, name: 'Book', image: "", price: 12, category: "Stationary", inventoryStatus: "Available"},
    { id: 2, name: 'Laptop', image: "", price: 15, category: "Electronic", inventoryStatus: "Available"},
    { id: 3, name: 'Mobile', image: "", price: 20, category: "Electronic", inventoryStatus: "Available"},
    { id: 4, name: 'Pen', image: "", price: 25, category: "Stationary", inventoryStatus: "Available"}
  ];

  constructor() { }

  ngOnInit() {}

  onReorder(value:any){
    console.log(value);
  }
}

export interface IProduct
{
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  inventoryStatus: string;
}
