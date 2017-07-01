export class OrderItem {
    itemCode: String;
    itemName: String;
    quantity: Number;
    rate: Number;
    customisation: String;
    
}

export class TableOrder{
    tableNo : String;
    EmpName: String;    
    status :String;
    orderItems :OrderItem[]=[];
}