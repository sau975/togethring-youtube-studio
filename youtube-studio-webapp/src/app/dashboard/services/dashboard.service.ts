import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private userNameSubject = new BehaviorSubject<string>("");
  userName$ = this.userNameSubject.asObservable();
  userName(userName: string) {
    this.userNameSubject.next(userName);
  }

  private profileImageSubject = new BehaviorSubject<string>("");
  profileImage$ = this.profileImageSubject.asObservable();
  profileImage(profileImage: string) {
    this.profileImageSubject.next(profileImage);
  }
  
  constructor() { }
}
