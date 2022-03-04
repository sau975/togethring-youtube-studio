import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent implements OnInit {

  lists = [
    { id: 1, name: 'Code' },
    { id: 2, name: 'Name' },
    { id: 3, name: 'Category' },
    { id: 4, name: 'Quantity' }
  ];

  constructor() { }

  ngOnInit() {}

  onReorder(value:any){
    console.log(value);
  }
}
