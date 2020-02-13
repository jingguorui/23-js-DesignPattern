/*
* 访问者模式
* */

// 访问者
function Visitor() {
    this.visit = function( concreteElement ) {
        concreteElement.doSomething();
    }
}
// 元素类
function ConceteElement() {
    this.doSomething = function() {
        console.log("这是一个具体元素");
    }
    this.accept = function( visitor ) {
        console.log(this)
        visitor.visit(this);
    }
}
// Client
var ele = new ConceteElement();
var v = new Visitor();
ele.accept( v );