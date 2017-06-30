import { Component, OnInit } from '@angular/core';
import { OrderItem} from './order';
import { OrderService } from './order.service';



@Component({
    moduleId: module.id,
    selector: 'order',
    templateUrl: 'order.component.html',
    styleUrls: ['order.component.css'],
    providers: [OrderService]
})
export class OrderComponent implements OnInit {
    currentTableNo: Number;
    currentEmloyee: String;
    orderItems: OrderItem[];
    newEditOrder: OrderItem ;
    

    constructor(private orderService: OrderService) { }

    ngOnInit(): void {
        this.setNewOrderEmpty();
        //this.orderService.getOrders().then(orders => this.orderItems = orders);
        this.orderService.getOrdersByTableNo('2').then(tblOrder => this.orderItems = tblOrder.orderItems);
    }
    keyDownFunction(event: any) {
        if (event.keyCode == 13) {
            if (this.isNewOrderEmpty()) {
                
            }
            else{
                this.orderItems.push(this.newEditOrder);
                this.setNewOrderEmpty();
            } 
        }
    }
    setNewOrderEmpty() {
        this.newEditOrder = {
            itemCode: "",
            itemName: "",
            quantity: 1,
            rate: null,
            customisation: ""
        }
    }
    isNewOrderEmpty(){
        return this.newEditOrder.itemCode == "" || this.newEditOrder.itemName == "" || this.newEditOrder.rate == null;
    }

}