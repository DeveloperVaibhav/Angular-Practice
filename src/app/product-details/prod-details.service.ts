import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdDetailsService {


  constructor(private httpClient: HttpClient) { }

  getProdDetailsById(id: number){
    return this.httpClient.get(`https://fakestoreapi.com/products/${id}`);
  }
}
