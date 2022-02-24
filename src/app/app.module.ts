import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from "@angular/common/http";
import { ConnectionComponent } from './connection/connection.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JwtModule} from "@auth0/angular-jwt";
import {ApiModule} from "../angular-module/";

export function tokenGetter(): string|null {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ConnectionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ApiModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: tokenGetter,
            allowedDomains: ["localhost:51873", '127.0.0.1:8000'],
          },
        }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
