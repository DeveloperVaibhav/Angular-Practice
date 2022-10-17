import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class SuccessInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        return next.handle(req).pipe(tap(event => {
            if(event instanceof HttpResponse){
                // alert("Data fetch successfully!!!");
                console.log("Data fetch successfully!!!");
            }else{
                // alert("Data couldn't be fetch successfully!!!");
                console.log("Data couldn't be fetch successfully!!!");

            }
        }));
    }
}
