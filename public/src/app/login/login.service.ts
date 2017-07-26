import { Injectable } from "@angular/core";
import { Http, Response,RequestOptions,Headers}  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class LoginService {
    constructor (private http: Http) {};
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
    authLogin(username: string, password: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let postData = {username:username,password:password,action:'signin'};
        let apiUrl = '/api/auth';
        return this.http.post(apiUrl, JSON.stringify(postData), options)
            .map(this.extractData)
            .catch(this.handleError);
    }

}