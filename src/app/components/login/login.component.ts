import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {IUser} from "../../models/IPopularity";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  basicUrl = 'http://localhost:3000/registratedUsers'

  public loginForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      }
    )

  }

  login() {
    this.httpClient.get<any>(this.basicUrl).subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.email === this.loginForm.value.email
      });
      if (user) {
        alert('Login Success');
        this.loginForm.reset;
        this.router.navigate(['profile'])
      } else {
        alert('User not found');
      }
    }, error => {
      alert('Something went wrong')
    })
  }


}
