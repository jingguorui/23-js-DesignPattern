/*
* 解释器模式
* */
var TerminalExpression = function(data){
    this.data = data;

    this.interpret = function(context){
        if(context === this.data){
            return true;
        }
        return false;
    }
}

var OrExpression = function(exprArr){
    this.exprArr = exprArr;

    this.interpret = function(context){
        var isMatch = false;
        this.exprArr.map(function(item){
            if(item.interpret(context)){
                isMatch = true;
            }
        })
        return isMatch;
    }
}

var AndExpression = function(exprArr){
    this.exprArr = exprArr;

    this.interpret = function(context){
        var isMatch = true;
        this.exprArr.map(function(item){
            if(!item.interpret(context)){
                isMatch = false;
            }
        })
        return isMatch;
    }
}

function getEvenExpression(){
    var ExpressionList = [];
    for(var i = -10; i<100; i++){
        if(i % 2 == 0){
            ExpressionList.push(new TerminalExpression(i));
        }
    }
    return new OrExpression(ExpressionList);
}

function getOddExpression(){
    var ExpressionList = [];
    for(var i = -10; i<100; i++){
        if(i % 2 != 0){
            ExpressionList.push(new TerminalExpression(i));
        }
    }
    return new OrExpression(ExpressionList);
}



function getNegativeOddExpression(){
    var ExpressionList = [];
    for(var i = -10; i<100; i++){
        if(i < 0){
            ExpressionList.push(new TerminalExpression(i));
        }
    }
    return new OrExpression(ExpressionList);
}

var isEven = getEvenExpression();
var isOdd = getOddExpression();
var isNegative = getNegativeOddExpression();
var isNegativeAndOdd = new AndExpression([isNegative,isOdd]);

console.log('2是偶数吗？ ' + isEven.interpret(2));//2是偶数吗？ true
console.log('3是偶数吗？ ' + isEven.interpret(3));//3是偶数吗？ false
console.log('3是奇数吗？ ' + isOdd.interpret(3));//3是奇数吗？ true
console.log('3是负数吗？ ' + isNegative.interpret(3));//3是负数吗？ false
console.log('-3是负数吗？ ' + isNegative.interpret(-3));//-3是负数吗？ true
console.log('-3是负奇数吗？ ' + isNegativeAndOdd.interpret(-3));//-3是负奇数吗？ true
console.log('-4是负奇数吗？ ' + isNegativeAndOdd.interpret(-4));//-4是负奇数吗？ false
console.log('3是负奇数吗？ ' + isNegativeAndOdd.interpret(3));//3是负奇数吗？ false

// xPath解释器
var Interpreter = (function () {
    // 获取兄弟元素名称
    function getSulingName(node) {
        if (node.previousSibling) {
            var name = '',
                count = 1,
                nodeName = node.nodeName,
                sibling = node.previousSibling
            while (sibling) {
                if (sibling.nodeType == 1 && sibling.nodeType === node.nodeType && sibling.nodeName) {
                    // 如果节点名称和前一个兄弟元素名称相同
                    if (nodeName == sibling.nodeName) {
                        name += ++count
                    } else {
                        count = 1
                        name += '|' + sibling.nodeName.toUpperCase()
                    }
                }
                sibling = sibling.previousSibling
            }
            return name
        } else {
            return ''
        }
    }
    return function (node, wrap) {
        var path = [],
            wrap = wrap || document
        if (node == wrap) {
            if (wrap.nodeType == 1) {
                path.push(wrap.nodeName.toUpperCase())
            }
            return path
        }
        if (node.parentNode !== wrap) {
            path = arguments.callee(node.parentNode, wrap)
        }
        else {
            if (wrap.nodeType == 1) {
                path.push(wrap.nodeName.toUpperCase())
            }
        }
        var sublingsNames = getSulingName(node)
        if (node.nodeType == 1) {
            path.push(node.nodeName.toUpperCase() + sublingsNames)
        }
        return path
    }
})()
var path = Interpreter(document.getElementById('span5'))
console.log(path)
