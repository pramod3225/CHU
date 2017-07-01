import { Injectable } from "@angular/core";
import { Http, Response,RequestOptions,Headers}  from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {  OrderItem,TableOrder} from './order';
//import { HEROES} from "./mock-heros";


@Injectable()
export class OrderService {
    private tableOrders :TableOrder[] = [];
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
    getEmptyOrder(): Promise<OrderItem> {
        return Promise.resolve({
            itemCode: "",
            itemName: "",
            quantity: 1,
            rate: null,
            customisation: ""
        });
    }

    getOrdersByTableNo(tableNo:String):Observable<TableOrder>{
        let apiUrl = 'api/orders/'+tableNo;
        return this.http.get(apiUrl).map(this.extractData).catch(this.handleError);
        
    }
    addOrderToTableNo(tableNo: String, empName: String, orderItem: OrderItem): Observable<any> {        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('api/orders', { name }, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getTablesAndEmpDetails():Observable<any>{
        let apiUrl = 'api/getdetail';
        return this.http.get(apiUrl).map(this.extractData).catch(this.handleError);
    }    

}