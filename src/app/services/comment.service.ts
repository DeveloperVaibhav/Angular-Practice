import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  base_url = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) {}

  getAllComments():Observable<Comment[]>{
    //will return the array of comment
    return this.http.get<Comment[]>(this.base_url);
      ;
  }
}
