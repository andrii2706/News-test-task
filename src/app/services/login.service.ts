import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {IUser} from "../models/IPopularity";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userSubject: BehaviorSubject<IUser>;
  public user: Observable<IUser>

  basicUrl = 'http://localhost:4200/login'

  constructor(
    // private router:Router
    private httpClient: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<IUser>((localStorage.getItem('user') || '').length ? JSON.parse(localStorage.getItem('user') || '') : []);
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): IUser {
    return this.userSubject.value;
  }

  login(name: string, password: string) {
    return this.httpClient.post<IUser>(`${this.basicUrl}/users/authenticate`, {name, password})
      .pipe(map((user: IUser) => {
        localStorage.setItem('user', JSON.stringify(user))
        this.userSubject.next(user);
        return user;
      }))
  }

  register(user: IUser) {
    return this.httpClient.post(`${this.basicUrl}/users/register`, user)
  }
}
