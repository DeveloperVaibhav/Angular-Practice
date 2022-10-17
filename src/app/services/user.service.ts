import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //json-server with user.json file should be running to show the data
  private api_url = ' http://localhost:3000/user';
  //httpClient variable(any name) is used to exclude the api through Interceptor 
  private httpClient: HttpClient;


  constructor(private http: HttpClient, private httpBackendObj: HttpBackend) { 
    //initializing the httpClient variable
    this.httpClient = new HttpClient(httpBackendObj);
  }

  getUsers(){
    //here use httpClient instead of http to exclude this api through interceptor
    return this.httpClient.get(this.api_url);

    //this will pass through interceptor
    // return this.http.get(this.api_url);
  }

  addUser(userObj: any){
    return this.http.post(this.api_url, userObj);
  }

  deleteUser(id: any){
    return this.http.delete(`${this.api_url}/${id}`);
  }

}
