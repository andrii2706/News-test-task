import {Component, OnInit} from '@angular/core';
import {IPopularity} from "../../models/IPopularity";
import {PopularNewsService} from "../../services/popular-news.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularNews: IPopularity[]

  constructor(
    private service: PopularNewsService
  ) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(value => this.popularNews = value.articles)
  }

}
