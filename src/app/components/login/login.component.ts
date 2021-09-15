import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl:string;
  registrationForm: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private loginService:LoginService,
  ) {

  }

  ngOnInit(): void {
this.loginForm = this.formBuilder.group(
  {
    name: ['',Validators.required],
    password: ['', Validators.required]
  }

)
  }

  onSubmit() {
  this.submitted = true;
  }

  onRegistration() {

  }
}
