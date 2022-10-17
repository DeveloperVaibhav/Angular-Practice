import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, retry } from "rxjs";

export class RetryInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //if the api request gets fail when the server is busy with other stuff
        //then we can say rerun the request one more time e.g. retry(1) or  retry(2)....
        return next.handle(req).pipe(retry(1));
        // return next.handle(req);
    }
}
