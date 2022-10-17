//model for comment object
//used to check type only
/* export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
} */


//Using class
//you can perform operation on model/entities and create a function and
// can access it in component using instance of the class
export class Comment {

    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;

    constructor(postId: number, id: number, name: string, email: string, body: string) {
        this.postId = postId;
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
    }

    //function to create name with id
    fullName() {
        return this.id + "-" + this.name;
    }
}
