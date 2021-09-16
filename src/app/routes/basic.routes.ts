import {Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {LoginComponent} from "../components/login/login.component";
import {NewsComponent} from "../components/news/news.component";
import {ProfileComponent} from "../components/profile/profile.component";
import {RegisterComponent} from "../components/login/register/register.component";
import {UserCheckService} from "../services/user-check.service";

export let routes: Routes = [
  {path: "", component: HomeComponent},
  {
    path: "login", component: LoginComponent, children: [
      {path: "registration", component: RegisterComponent}
    ]
  },
  {path: "news", component: NewsComponent},
  {path: "profile", component: ProfileComponent}
  // {path:"profile", component:ProfileComponent, canActivate:[UserCheckService]}
]
