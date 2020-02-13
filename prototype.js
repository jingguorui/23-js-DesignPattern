/*
* 原型模式
* */
var vehiclePrototype = {
    init: function (carModel) {
        this.model = carModel || "保时捷";
    },
    getModel: function () {
        console.log('车辆模具是：' + this.model);
    }

};

function vehicle(model) {
    function F() { };
    F.prototype = vehiclePrototype;
    var f = new F();
    console.log(f)
    f.init(model);
    return f;
}
var car = vehicle('法拉利');
car.getModel();