import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IPopularityFull} from "../models/IPopularity";

@Injectable({
  providedIn: 'root'
})
export class PopularNewsService {

   popularBasic = 'https://newsapi.org/v2/everything?q=apple&from=2021-09-12&to=2021-09-12&sortBy=popularity&apiKey=d71a2ff15e744a968e47ceb0fa6797cd'
  constructor(
    private httpClient:HttpClient
  ) { }
getAll():Observable<IPopularityFull>{
     return this.httpClient.get<IPopularityFull>(this.popularBasic)
}
}
