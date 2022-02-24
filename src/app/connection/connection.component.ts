import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Credentials, Token, TokenService, User, UserService} from "../../angular-module";
import {Router} from "@angular/router";
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

  constructor(
    private router: Router, private tokenService: TokenService, private userService: UserService, public jwtHelper: JwtHelperService
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
    });

    console.log(this.jwtHelper.getTokenExpirationDate());


    this.router.navigate(['/test']);

  }
}
