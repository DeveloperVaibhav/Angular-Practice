import { Component, OnInit } from '@angular/core';
import * as x from './products.json';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myProducts = (x as any).default;

  SortProducts(type: string) {
    debugger;
    if (type == 'asc') {
      this.myProducts.sort((p1: any, p2: any) => p1.price - p2.price);
    } else {
      this.myProducts.sort((p1: any, p2: any) => p2.price - p1.price);
    }
  }

  p: any;
  searchText: string = "";

  addToCart() {
    // alert("Item added to cart")

    Swal.fire(
      'Congratulations!',
      'Item added to cart',
      'success'
    )
  }

}
