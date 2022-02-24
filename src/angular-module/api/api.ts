export * from './address.service';
import { AddressService } from './address.service';
export * from './brand.service';
import { BrandService } from './brand.service';
export * from './category.service';
import { CategoryService } from './category.service';
export * from './order.service';
import { OrderService } from './order.service';
export * from './product.service';
import { ProductService } from './product.service';
export * from './token.service';
import { TokenService } from './token.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [AddressService, BrandService, CategoryService, OrderService, ProductService, TokenService, UserService];
