import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {IUser} from "../../../models/IPopularity";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registrationForm!: FormGroup;
  basicUrl = 'http://localhost:3000/registratedUsers'


  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    })

  }

  signUp() {
    this.httpClient.post<IUser>(this.basicUrl, this.registrationForm.value).subscribe(res => {
      alert("Registration Successfully")
      this.registrationForm.reset();
      this.router.navigate(['profile'])
    }, error => {
      alert('SomeThing went wrong')
    })
  }
}
