"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var order_1 = require("./order");
//import { HEROES} from "./mock-heros";
var OrderService = (function () {
    function OrderService() {
        this.tableOrders = [];
        // getHerosSlowly():Promise<OrderItem[]>{
        //     return new Promise(resolve=>{
        //         setTimeout(() =>resolve(this.getHeros()) , 5000);
        //     });
        // }
    }
    OrderService.prototype.getOrders = function () {
        return Promise.resolve([]);
    };
    OrderService.prototype.getEmptyOrder = function () {
        return Promise.resolve({
            itemCode: "",
            itemName: "",
            quantity: 1,
            rate: null,
            customisation: ""
        });
    };
    OrderService.prototype.getOrdersByTableNo = function (tableNo) {
        for (var i = 0, len = this.tableOrders.length; i < len; i++) {
            if (this.tableOrders[i].tableNo == tableNo)
                return Promise.resolve(this.tableOrders[i]);
        }
        return Promise.resolve(new order_1.TableOrder());
    };
    OrderService.prototype.addOrderToTableNo = function (tableNo, empName, orderItem) {
        var isTableFound = false;
        for (var i = 0, len = this.tableOrders.length; i < len; i++) {
            if (this.tableOrders[i].tableNo == tableNo) {
                isTableFound = true;
                this.tableOrders[i].orderItems.push(orderItem);
                return true;
            }
        }
        if (!isTableFound) {
            this.tableOrders.push({
                tableNo: tableNo,
                EmpName: empName,
                isBillGenerated: false,
                orderItems: [orderItem]
            });
        }
    };
    return OrderService;
}());
OrderService = __decorate([
    core_1.Injectable()
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map