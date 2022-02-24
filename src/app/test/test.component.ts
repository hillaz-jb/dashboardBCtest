import { Component, OnInit } from '@angular/core';
import {Product, ProductService, User, UserService} from "../../angular-module";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  myProduct!: Product;
  myUser!: User;

  constructor(

    private productService: ProductService, private userService: UserService,
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
  }
}
