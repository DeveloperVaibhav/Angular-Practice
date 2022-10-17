import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[]; //type will be comment array when using model
  subscription1 : Subscription; //type of Subscription
  subscription2 : Subscription;
  subscription3 : Subscription;
  //if having multiple subscription to unsubscribe
  //instead of creating separate subscription you can create array
  allSubscriptions : Subscription[];  

  constructor(private commentService: CommentService) {
    this.comments = [];
    this.subscription1 = new Subscription(); //initializing with default value by creating object
    this.subscription2 = new Subscription();
    this.subscription3 = new Subscription(); 
    //OR
    //to maintain all the subscription in one array
    this.allSubscriptions = [];

   }

  ngOnInit(): void {
    //whenever we start the subscription, we have to store it in one variable bcz we need to unsubscribe it
    this.subscription1 = this.commentService.getAllComments().subscribe( response => {
      // this.comments = response;

      //as we are doing like this to access the fullNmae() function in comment class
      response.forEach(res => {
        const commnetObj = new Comment(res.postId,res.id,res.name,res.email,res.body);
        this.comments.push(commnetObj);
      })
    });
    //like this you can push all the subscription variables in an array after creating each subscription
    this.allSubscriptions.push(this.subscription1);

  }

  ngOnDestroy(){
    // this.subscription1.unsubscribe();

    //unsubscribe all the subscriptions
    this.allSubscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }

}
