/*
* 抽象工厂模式
* */

let agency = function(subType, superType) {
    //判断抽象工厂中是否有该抽象类
    if(typeof agency[superType] === 'function') {
        function F() {};
        //继承父类属性和方法
        F.prototype = new agency[superType] ();
        //将子类的constructor指向子类
        subType.constructor = subType;
        //子类原型继承父类
        subType.prototype = new F();

    } else {
        throw new Error('抽象类不存在!')
    }
}

//鼠标抽象类
agency.mouseShop = function() {
    this.type = '鼠标';
}
agency.mouseShop.prototype = {
    getName: function() {
        return new Error('抽象方法不能调用');
    }
}

//键盘抽象类
agency.KeyboardShop = function() {
    this.type = '键盘';
}
agency.KeyboardShop.prototype = {
    getName: function() {
        return new Error('抽象方法不能调用');
    }
}



//普通鼠标子类
function mouse(name) {
    this.name = name;
    this.item = ['买我，我线长',"玩游戏贼溜"]
}
//抽象工厂实现鼠标类的继承
agency(mouse, 'mouseShop');
//子类中重写抽象方法
mouse.prototype.getName = function() {
    return this.name;
}

//普通键盘子类
function Keyboard(name) {
    this.name = name;
    this.item = ['行，你买它吧',"没键盘看你咋玩"]
}
//抽象工厂实现键盘类的继承
agency(Keyboard, 'KeyboardShop');
//子类中重写抽象方法
Keyboard.prototype.getName = function() {
    return this.name;
}



//实例化鼠标
let mouseA = new mouse('联想');
console.log(mouseA.getName(), mouseA.type); //联想 鼠标
let mouseB = new mouse('戴尔');
console.log(mouseB.getName(), mouseB.type); //戴尔 鼠标

//实例化键盘
let KeyboardA = new Keyboard('联想');
console.log(KeyboardA.getName(), KeyboardA.type); //联想 键盘
let KeyboardB = new Keyboard('戴尔');
console.log(KeyboardB.getName(), KeyboardB.type); //戴尔 键盘