"use strict";
var OrderItem = (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;
var TableOrder = (function () {
    function TableOrder() {
        this.isBillGenerated = false;
        this.orderItems = [];
    }
    return TableOrder;
}());
exports.TableOrder = TableOrder;
//# sourceMappingURL=order.js.map