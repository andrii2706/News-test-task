import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IPopularity";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  basicUrl = 'http://localhost:3000/registratedUsers'

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getInfo(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.basicUrl)
  }
}
