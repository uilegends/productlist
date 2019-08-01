import { Component, OnInit } from '@angular/core';
import { ProductValues } from '../productinterface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  myclass = 'titleclass';
  productData: ProductValues[] = [
    { id: 1, name: 'productone', price: 20 },
    { id: 2, name: 'producttwo', price: 30 },
    { id: 3, name: 'productthree', price: 50 },
    { id: 4, name: 'productfour', price: 60 },
    { id: 5, name: 'productfive', price: 70 },
    { id: 6, name: 'productSix', price: 80 }
  ]
  constructor() { }

  ngOnInit() {

  }

  productDetails(id: number, name: string, price: number) {
    alert(`Id:  ${id}  Product Name:  ${name}  Price:  ${price}`);
  }


}
