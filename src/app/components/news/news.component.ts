import { Component, OnInit } from '@angular/core';
import {INews} from "../../models/INews";
import {NewsService} from "../../services/news.service";
import {query} from "@angular/animations";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: INews[]
  page: number
  querry: string
  constructor(
    private newsService:NewsService
  ) { }

  ngOnInit(): void {
    this.getNews(1,'apple')
  }
  getNews(NewPage:number,querry:string):void {
    // @ts-ignore
    this.newsService.getPagintion(NewPage, querry).subscribe(value => this.news = value.articles)
    console.log(querry);
  }
  paginationTo(NewPage:number){
    this.page = NewPage
    this.getNews(NewPage,'apple')
  }
  foundWords(e:any){
    e.preventDefault()
    this.getNews(1,this.querry)
  }
  setQuery(querry:any){
    this.querry = querry.target.value
  }
}
