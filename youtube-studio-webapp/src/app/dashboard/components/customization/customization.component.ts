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
  ];
  image!: string;
  show: boolean = false;
  userName: string = "Saurav";
  email!: string;

  constructor() { }

  ngOnInit() {}

  onReorder(value:any){
    console.log(value);
  }

  onBasicUploadAuto(value:any){
    this.image = value;
    console.log(value);
  }

  editName(){
    this.show = true;
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
