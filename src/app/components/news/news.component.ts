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
    this.newsService.getPagintion(NewPage, querry).subscribe(value => this.news = value.articles)
  }
  paginationTo(NewPage:number){
    this.page = NewPage
    this.getNews(NewPage,'apple')
  }
  foundWords(querry:string, Newpage:number){
  this.querry = querry
    this.getNews(Newpage,querry)
  }

}
