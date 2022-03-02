import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displaySideBar: boolean = true;
  userDetails: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let user:any = localStorage.getItem('user');
    this.userDetails = JSON.parse(user);
  }

  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      // reader.onload = (event) => { // called once readAsDataURL is completed
      //   this.url = event.target.result;
      // }
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
