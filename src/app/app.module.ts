import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CenterComponent } from './center/center.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CorouselComponent } from './corousel/corousel.component';
import { LoginModule } from './login/login.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { ProductComponent } from './product/product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Highlight } from './custom-directives/highlight';
import { BodyComponent } from './body/body.component';
import { NumberonlyDirective } from './custom-directives/numberonly.directive';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitleToNamePipe } from './custom-pipes/title-to-name.pipe';
import { ConvertSalaryPipe } from './custom-pipes/convert-salary.pipe';
import { OrdinalPipe } from './custom-pipes/ordinal.pipe';
import { ParentComponent } from './component-communication/parent/parent.component';
import { Child1Component } from './component-communication/child1/child1.component';
import { Child2Component } from './component-communication/child2/child2.component';
import { EmpComponent } from './emp/emp.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CommentComponent } from './comment/comment.component'
import { MathServiceService } from './component-communication/math-service.service';
import { TooltipOnEllipsisActiveDirective } from './custom-directives/tooltip-on-ellipsis-active.directive';
import { MyInterceptor1 } from './utils/my-interceptor1';
import { RetryInterceptor } from './utils/retry-interceptor';
import { SuccessInterceptor } from './utils/success-interceptor';
import { Observable1Component } from './observable1/observable1.component';
import { Observable2Component } from './observable2/observable2.component';
import { Observable3Component } from './observable3/observable3.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { CareerComponent } from './career/career.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetail2Component } from './product-detail2/product-detail2.component';
import { PermanentJobsComponent } from './permanent-jobs/permanent-jobs.component';
import { ContractJobsComponent } from './contract-jobs/contract-jobs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PaymentModule } from './payment/payment.module';
//import { CustomersModule } from './customers/customers.module';

@NgModule({
  
  //components, directives, pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    NavbarComponent,
    CorouselComponent,
    DataBindingComponent,
    DirectivesComponent,
    ProductComponent,
    Highlight,
    BodyComponent,
    NumberonlyDirective,
    EmployeeListComponent,
    PipesComponent,
    TitleToNamePipe,
    ConvertSalaryPipe,
    OrdinalPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    EmpComponent,
    UserComponent,
    CommentComponent,
    TooltipOnEllipsisActiveDirective,
    Observable1Component,
    Observable2Component,
    Observable3Component,
    Form1Component,
    Form2Component,
    CareerComponent,
    AboutUsComponent,
    HomeComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ProductDetail2Component,
    PermanentJobsComponent,
    ContractJobsComponent,
    ContactUsComponent,
  ],
  //modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule, 
    LoginModule, //eager loaded module
    PaymentModule, //eager loaded module
    //CustomersModule //don't import customers module here if it's lazy loaded
  ],
  //services, Injectables
  //service is available 
  providers: [
    MathServiceService,
    //all the api will pass through all this interceptor mention below
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor1, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SuccessInterceptor, multi: true },
  ],

  //components to bootstrap/load
  bootstrap: [AppComponent]
})
export class AppModule { }
