/*
* 模板方法模式
* */
var Beverge = function() {};

Beverge.prototype.boilWater = function() {
    console.log('把水煮沸');
};
Beverge.prototype.brew = function() {
    throw new Error('子类必须重写brew方法');
};

Beverge.prototype.pourInCup = function() {
    throw new Error('子类必须重写pourInCup方法');
};

Beverge.prototype.addCondiments = function() {
    throw new Error('子类必须重写addCondiments方法');
};

Beverge.prototype.init = function() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) {
        this.addCondiments();
    }
}

var CoffeeWithHook = function() {};

CoffeeWithHook.prototype = new Beverge();
//重写抽象父类中的一些方法
CoffeeWithHook.prototype.brew = function() {
    console.log('用沸水冲泡咖啡');
}

CoffeeWithHook.prototype.pourInCup = function() {
    console.log('把咖啡倒进杯子');
}

CoffeeWithHook.prototype.addCondiments = function() {
    console.log('加糖和牛奶');
}

CoffeeWithHook.prototype.customerWantsCondiments = function() {
    return window.confirm('请问需要调料吗');
}

var coffee = new CoffeeWithHook();
coffee.init();

