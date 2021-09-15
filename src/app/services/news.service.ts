import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {INewsFull} from "../models/INews";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

 basicUrl = 'https://newsapi.org/v2/everything'
 key = '&apiKey=d71a2ff15e744a968e47ceb0fa6797cd'
  // key = 'd71a2ff15e744a968e47ceb0fa6797cd'
url ='https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=d71a2ff15e744a968e47ceb0fa6797cd&page=5'
  constructor(
    private httpClient:HttpClient
  ) { }
  getPagintion(NewPage:number,querry:string):Observable<INewsFull> | undefined{
 // console.log(NewPage, querry);
   if(NewPage && querry){
   return this.httpClient.get<INewsFull>(this.basicUrl + `?q=${querry} &page=${NewPage}` + this.key )
 } else if(NewPage && !querry){
   return this.httpClient.get<INewsFull>(this.basicUrl + `&page=${NewPage}` + this.key )
 }else if(!NewPage && querry){
   return this.httpClient.get<INewsFull>(this.basicUrl + `?q=${querry}` + this.key )
 } else {
   return undefined
 }
 }
  // foundinfo(query:string):Observable<INewsFull>{
  //  return this.httpClient.get<INewsFull>(this.basicUrl + `?q=${query}`+ this.key)
  // }
}
