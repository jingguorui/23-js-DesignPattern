/*
* 桥接模式
* */
/*
* 将两个不相关的类通过桥接模式全部调用起来
* 
* */
//一、最简单的桥接模式
var each = function (arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];
        if (fn.call(val, i, val, arr)) {
            return false;
        }
    }
};
var arr = [1, 2, 3, 4];
each(arr, function (i, v) {
    arr[i] = v * 2;
});
console.log(arr)

//二、
class Speed {            // 运动模块
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    run() {  console.log(`运动起来 ${this.x} + ${this.y}`)  }
}

class Color {            // 着色模块
    constructor(cl) {
        this.color = cl
    }
    draw() {  console.log(`绘制颜色 ${this.color}`)  }
}

class Speak {
    constructor(wd) {
        this.word = wd
    }
    say() {  console.log(`说话 ${this.word}`)  }
}

class Ball {                     // 创建球类，可以着色和运动
    constructor(x, y, cl) {
        this.speed = new Speed(x, y)
        this.color = new Color(cl)
    }
    init() {
        this.speed.run()
        this.color.draw()
    }
}

class Man {                    // 人类，可以运动和说话
    constructor(x, y, wd) {
        this.speed = new Speed(x, y)
        this.speak = new Speak(wd)
    }
    init() {
        this.speed.run()
        this.speak.say()
    }
}

const man = new Man(1, 2, 'hehe?')
man.init()
