import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProdDetailsService } from './prod-details.service';

@Injectable({
  providedIn: 'root'
})
export class ProdDetailsResolverService implements Resolve<any>{

  constructor(private prodDetailsService: ProdDetailsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.prodDetailsService.getProdDetailsById(route.params['id']); 
    //we are taking the id from activated route param(i.e from route path)
  }
}
