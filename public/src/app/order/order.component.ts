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
    currentTableNo: string = "";
    tables:any = [];
    employees:any[]=[];
    currentEmloyee: string = "";
    orderItems: OrderItem[];
    newEditOrder: OrderItem ;
    acTablesInOrder :string[] = [];
    nonAcTablesInOrder :string[] = [];
    takeAwayOrder :number=0;
    

    constructor(private orderService: OrderService) { }

    ngOnInit(): void {
        this.setNewOrderEmpty();   
        this.orderService.getTablesAndEmpDetails().subscribe(htlDetail =>{
             this.tables = htlDetail.tables,
             this.employees = htlDetail.EmpList
        });
        this.orderService.getTablesInOrder().subscribe(tbls =>{
             for (let i = 0; i < tbls.length; i++) {
                 this.addCurrTblToCategory(tbls[i].tableNo);
             }
        });
            
        this.orderService.getOrdersByTableNo(this.currentTableNo).subscribe(tblOrder => 
            this.orderItems = tblOrder.orderItems
        );        
    }
    keyDownFunction(event: any) {
        if (event.keyCode == 13) {
            if (this.isNewOrderEmpty()) {
                
            }
            else{
                this.orderService.addOrderToTableNo(this.currentTableNo,this.currentEmloyee,this.newEditOrder).subscribe(r=>{});
                this.orderItems.push(this.newEditOrder);
                this.addCurrTblToCategory(this.currentTableNo);
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
    getTableType(tableNo:number):number{
        for (var i = 0; i < this.tables.length; i++) {
            if(this.tables[i].tblNo == tableNo) return this.tables[i].ac;           
        }
       return -10;       
    }
    addCurrTblToCategory(tblNo:string):void{
        let tblType = this.getTableType(parseInt(tblNo));
                 switch (tblType) {
                     case 1:
                         if(this.acTablesInOrder.indexOf(tblNo)===-1)this.acTablesInOrder.push(tblNo);
                         break;
                    case 0:
                         if(this.nonAcTablesInOrder.indexOf(tblNo)===-1)this.nonAcTablesInOrder.push(tblNo);
                         break;
                    case -1:
                         ++this.takeAwayOrder;
                         break;
                     default:                     
                         break;
                 }                

    }

}