import {Component, Input, OnInit} from '@angular/core';
import {INews} from "../../../models/INews";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input()
  info: INews

  constructor() {
  }

  ngOnInit(): void {
  }

}
