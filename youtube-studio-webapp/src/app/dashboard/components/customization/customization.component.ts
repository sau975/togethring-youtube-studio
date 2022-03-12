import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

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
  userName!: string;
  email!: string;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.userName = String(localStorage.getItem('userName'));
  }

  onReorder(value:any){
    console.log(value);
  }

  onBasicUploadAuto(value:any){
    this.image = value;
    console.log(value);
  }

  showEditUserName(){
    this.show = true;
  }

  publish(){
    this.editUserName();
    this.dashboardService.userName(this.userName);
  }

  cancel(){
    this.show = false;
    this.userName = String(localStorage.getItem('userName'));
  }

  gotPhoto(element:any) { 
    var file = element.files[0];

    //I want to save 'file' to local storage here :-(
  }

  editUserName(){
    localStorage.setItem('userName', this.userName);
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
