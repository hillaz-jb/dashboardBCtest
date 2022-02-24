import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Credentials, Token, TokenService, User, UserService} from "../../angular-module";
import {Router} from "@angular/router";
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  userFormGroup!: FormGroup;
  creditential: Credentials = {};
  myToken: string = '';
  myUser!: User;

  /*public form = this.fb.group({
    // new FormControl('');
    email: [''],
    password: [''],
  });*/


  constructor(
    private router: Router, private tokenService: TokenService, private userService: UserService, private httpClient: HttpClient, private fb: FormBuilder,public jwtHelper: JwtHelperService
  ) { }

  ngOnInit(): void {
    this.userFormGroup = new FormGroup(
      {
        _email: new FormControl(
          this.creditential.email, [
            Validators.required
          ]
        ),
        _password: new FormControl(
          this.creditential.password, [
            Validators.required
          ]
        ),
      }
    );
  }

  get email(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_email');
  }

  get password(): AbstractControl {
    return <AbstractControl>this.userFormGroup.get('_password');
  }

  onSubmit(): void {

    this.creditential.email = this.email.value;
    this.creditential.password = this.password.value;
    this.tokenService.postCredentialsItem(this.creditential).subscribe((myData: Token) => {
      // @ts-ignore
      this.myToken = myData.token;
      console.log(this.myToken);
      localStorage.setItem('access_token', this.myToken)
      this.userService.getUserItem('1').subscribe((myData: User) => {
        this.myUser = myData;
        console.log(this.myUser);
      })
    });

    console.log(this.jwtHelper.getTokenExpirationDate());


    //this.router.navigate(['/test']);

    /*this.httpClient.post<{token: string}>(
      'https://127.0.0.1:8000/api/login_check',
      this.form.value
    ).subscribe((data: {token: string}) => {
      localStorage.setItem('access_token', data.token);

      this.router.navigate(['']);
    }, () => {
      // Here fail login.
      this.form.enable();
      alert('Error login');
    });

  }

  public get isLogged(): boolean {
    return localStorage.getItem('access_token') !== null;*/
  }
}
