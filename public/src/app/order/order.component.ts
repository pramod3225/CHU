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
    currentTableNo: String = "";
    currentEmloyee: String = "";
    orderItems: OrderItem[];
    newEditOrder: OrderItem ;
    

    constructor(private orderService: OrderService) { }

    ngOnInit(): void {
        this.setNewOrderEmpty();       
        this.orderService.getOrdersByTableNo(this.currentTableNo).subscribe(tblOrder => this.orderItems = tblOrder.orderItems);
    }
    keyDownFunction(event: any) {
        if (event.keyCode == 13) {
            if (this.isNewOrderEmpty()) {
                
            }
            else{
                this.orderService.addOrderToTableNo(this.currentTableNo,this.currentEmloyee,this.newEditOrder);
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
    onChangeTable(event:any){
        this.orderService.getOrdersByTableNo(this.currentTableNo).subscribe(tblOrder => {
            this.orderItems = tblOrder.orderItems;
            this.currentEmloyee= tblOrder.EmpName
        });
    }

}