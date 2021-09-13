import {Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {LoginComponent} from "../components/login/login.component";
import {NewsComponent} from "../components/news/news.component";
import {ProfileComponent} from "../components/profile/profile.component";

export let routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"news", component:NewsComponent},
  {path:"profile", component:ProfileComponent}
]
