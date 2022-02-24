import { Component, OnInit } from '@angular/core';
import {Product, ProductService, User, UserService} from "../../angular-module";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  myProduct!: Product;
  myUser!: User;

  constructor(

    private productService: ProductService, private userService: UserService, private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.userService.getUserItem('1').subscribe((myData: User) => {
      this.myUser = myData;
      console.log(this.myUser);
    })

    this.productService.getProductItem('1').subscribe((myData: Product) => {
      this.myProduct = myData;
      console.log(this.myProduct);
    });

    this.http.get("https://127.0.0.1:8000/api/products/1").subscribe(
      (data) => console.log(data),
      (err) => console.log(err)
    );

  }
}
