import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent implements OnInit {

  profileImage: any = "https://www.w3schools.com/howto/img_avatar.png";
  bannerImage: any = "https://www.w3schools.com/howto/img_avatar.png";
  watermark: any;
  show: boolean = false;
  userName!: string;
  email!: string;
  products: IProduct[] = [
    { id: 1, name: 'Book', image: "", price: 12, category: "Stationary", inventoryStatus: "Available"},
    { id: 2, name: 'Laptop', image: "", price: 15, category: "Electronic", inventoryStatus: "Available"},
  ];

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
    this.userName = String(localStorage.getItem('userName'));
    this.profileImage = localStorage.getItem('profileImage');
    this.bannerImage = localStorage.getItem('bannerImage');
    this.watermark = localStorage.getItem('watermark');
  }

  onReorder(value:any){
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

  onSelectProfileFile(event:any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.profileImage = (<FileReader>event.target).result;
        localStorage.setItem('profileImage', this.profileImage);
        this.dashboardService.profileImage(this.profileImage);
      }
    }
  }

  onSelectBannerFile(event:any){
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.bannerImage = (<FileReader>event.target).result;
        localStorage.setItem('bannerImage', this.bannerImage);
      }
    }
  }

  onSelectWatermarkFile(event:any){
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.watermark = (<FileReader>event.target).result;
        localStorage.setItem('watermark', this.watermark);
      }
    }
  }

  removeProfileImage(){
    localStorage.removeItem('profileImage');
    this.dashboardService.profileImage("");
    this.profileImage = localStorage.getItem('profileImage');
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
