import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prod_id: number = 0;
  prodDetailsObj : any = {};
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //using the  ActivatedRoute service, we can use the activated route id i.e. mention 
    //in path: 'product-details/:id' value in app-routing file ( OR routerLink="/product-details/{{prod.id}}")
    //thus the id from product component can be used in product details component
    this.activatedRoute.params.subscribe((param) => { //if we use .params on activatedRoute, will give param passed to route only 
      console.log(this.activatedRoute.params); //this is observable
      this.prod_id = param['id']; //'id' ----> from ---> path: 'product-details/:id'
      //Make the API call with the ID to get the details of the product and display
    })

    //.data method on activatedRoute will give you all the data on that route
    this.activatedRoute.data.subscribe( (response: any) => {
      this.prodDetailsObj = response.prodDetaisKey; //prodDetaisKey is from resolve in app-routing file
      console.log("prod details",this.prodDetailsObj);
    })

  }

}
