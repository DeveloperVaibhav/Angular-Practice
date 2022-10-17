import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class MyInterceptor1  implements HttpInterceptor{
    //Interceptor will modify the request by adding authorization token in the header
    //It is one of the kind of security purpose
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       
        //Backend people will provide you this token 
        //when we login with the authorization, it provide one token(e.g. JWT) and we store it and use it here
        //for the time being we are using hard coded token here 
        const hardCodedToken = "1d38fe-8671-6735-7360-2hjhsjh5";

        //Interceptor will apply for all the requests
        const requestWithToken = req.clone({
            setHeaders: {
                Authorization : `Bearer ${hardCodedToken}`
            }
        });
        return next.handle(requestWithToken);


        //Interceptor will applied for all the request other than user request
        //If we want to exclude any api then we can do like this
        // will exclude user api, http://localhost:3000/user
        //OR use HttpBackend on respective api in service class
       /*  if(!req.url.includes("user")){
            const requestWithToken = req.clone({
                setHeaders: {
                    Authorization : `Bearer ${hardCodedToken}`
                }
            });
            return next.handle(requestWithToken);
        }else{
            //for user api, original request will be shown
            return next.handle(req);
        } */
       
    }
}


//http.get() ----> having 100 api
//95 api ----> will go through interceptor
//5 api  ----> will not go through interceptor
//we can do this using HttpBackend or BYPASS_LOG ....