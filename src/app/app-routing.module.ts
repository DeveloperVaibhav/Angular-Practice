import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContractJobsComponent } from './contract-jobs/contract-jobs.component';
import { Guard1Service } from './guard1.service';
import { Guard2Service } from './guard2.service';
import { Guard3Service } from './guard3.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PermanentJobsComponent } from './permanent-jobs/permanent-jobs.component';
import { ProductDetail2Component } from './product-detail2/product-detail2.component';
import { ProdDetailsResolverService } from './product-details/prod-details-resolver.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
 
  {path: "home", component: HomeComponent},
  {
    path: "career", 
    component: CareerComponent,
    //if we want to guard the route of all the child component then use canActivateChild
    //we can use canActivate as well in each component 
    canActivateChild: [Guard2Service],
    children:[
      // {path: "", component: PermanentJobsComponent},
      {path: "permanent-jobs", component: PermanentJobsComponent},
      {path: "contract-jobs", component: ContractJobsComponent},
      // {path: "permanent-jobs", component: PermanentJobsComponent,canActivate: [Guard1Service]},
      // {path: "contract-jobs", component: ContractJobsComponent,canActivate: [Guard1Service]},
    ]
  },
  {path: "aboutus", component: AboutUsComponent},
  {
    path: "contactus", 
    component: ContactUsComponent,
    canDeactivate: [Guard3Service]
  },
  //order of object matter
  {
    path: "product",
    component: ProductComponent,
    canActivate: [Guard1Service],//If this service return true only then it will activate the product route
  },
  {//Path-param and resolver demo
    path: "product-details/:id", 
    component: ProductDetailsComponent,
    resolve: {prodDetaisKey : ProdDetailsResolverService} //
  }, 
  {path: "product-detail2", component: ProductDetail2Component}, //Query-param demo
 
  { 
    //loading a module on routing to customers component
    //when it route to customers only then load the customers module (lazy loading)
    //customers is a component inside customers module
    //whenever we load any module it will load all the component inside it
    path: 'customers', 
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) 
  },
  

  {path: "", component: HomeComponent},
  {path: "**", component: NotFoundComponent}, //always write this line at the end
  //{path: "product", component: ProductComponent}, //won't work after **
  // if we write "product" path object after the "**" path object 
  //then it won't show product list hoever it will show not found
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
