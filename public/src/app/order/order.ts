export class OrderItem {
    itemCode: string;
    itemName: string;
    quantity: number;
    rate: number;
    customisation: string;
    
}

export class TableOrder{
    tableNo : string;
    EmpName: string;    
    status :string;
    orderItems :OrderItem[]=[];
}