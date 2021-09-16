import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/IPopularity";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  info: IUser[]

  constructor(
    private profileService: ProfileService
  ) {
  }

  ngOnInit(): void {
    this.profileService.getInfo().subscribe(value => this.info = value)
    console.log(this.info);
  }

}
