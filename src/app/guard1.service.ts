import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//this service return true or false based on userRole
export class Guard1Service implements CanActivate{

  userRole = 'admin'; //This will be collected after login
  // userRole = 'normalUser';

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(this.userRole !== 'admin'){
      alert("Sorry, You don't have acces to this route ");
      return false;
    }
    return true;
  }
}
