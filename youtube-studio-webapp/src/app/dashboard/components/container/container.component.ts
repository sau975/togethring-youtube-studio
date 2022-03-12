import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/login/services/auth.service';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  displaySideBar: boolean = true;
  userDetails: any;
  userName!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    let user:any = localStorage.getItem('user');
    this.userName = String(localStorage.getItem('userName'));
    this.userDetails = JSON.parse(user);
  }

  userName$ = this.dashboardService.userName$.pipe(tap(res => this.userName = res)).subscribe();

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
