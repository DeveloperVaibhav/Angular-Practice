import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail2',
  templateUrl: './product-detail2.component.html',
  styleUrls: ['./product-detail2.component.css']
})
export class ProductDetail2Component implements OnInit {

  detail: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.detail = queryParams;
    });
    // OR
    // this.activatedRoute.queryParamMap.subscribe(queryParams => {
    //   this.detail = {...queryParams.keys, ...queryParams};
    //   console.log("Product details" , this.detail);
    // });
  }

}
