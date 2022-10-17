import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Injectable({
  providedIn: 'root'
})
export class Guard3Service implements CanDeactivate<ContactUsComponent>{

  hasChanges: boolean = false;
  // hasChanges: boolean = true;
  constructor() { }
  canDeactivate(component: ContactUsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(this.hasChanges){
      alert("plz save the changes before you go to another route");
      return false;
    }else{
      return true;
    }
  }
}
