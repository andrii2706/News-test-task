import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WrapComponent } from './components/wrap/wrap.component';
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { ProfileComponent } from './components/profile/profile.component';
import {routes} from "./routes/basic.routes";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import { InfoComponent } from './components/news/info/info.component';
import {MatInputModule} from "@angular/material/input";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    WrapComponent,
    HomeComponent,
    LoginComponent,
    NewsComponent,
    ProfileComponent,
    InfoComponent,
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        NgxPaginationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
