/*
* 单列模式
* */
//1-------------------------------------------------------
var createMask = function(){
    var mask;
    return function(){
        return mask || ( mask = document.body.appendChild( document.createElement('div') ) )
    }
}()
console.log(createMask())
//2.--------------------------------------------------------
var Singleton = function(name) {
    this.name = name;
    //一个标记，用来判断是否已将创建了该类的实例
    this.instance = null;
}
// 提供了一个静态方法，用户可以直接在类上调用
Singleton.getInstance = function(name) {
    // 没有实例化的时候创建一个该类的实例
    if(!this.instance) {
        this.instance = new Singleton(name);
    }
    // 已经实例化了，返回第一次实例化对象的引用
    return this.instance;
}
var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
// 指向的是唯一实例化的对象
console.log(a);

//3--------------------------------------------------------
/*
* es6实现单列模式
* */
class Singletons {
    constructor(name) {
        this.name = name;
        this.instance = null;

    }
    // 构造一个广为人知的接口，供用户对该类进行实例化
    static getInstance(name) {
        if(!this.instance) {
            this.instance = new Singletons(name);
        }
        return this.instance;
    }
}
var aa=Singletons.getInstance(111)
var bb=Singletons.getInstance(222)
console.log(aa===bb)
var cc=new Singletons(333)
var dd=new Singletons(444)
console.log(cc===dd)