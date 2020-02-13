/*
* 工厂方法模式
* */

var Factory=function(type,content){
    if(this instanceof Factory){
        var s = new this[type](content);
    }else{
        return new Factory(type,content);
    }
}
//工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
    Java: function( content ){
        console.log(content);
    },
    JavaScript: function( content ){
        console.log(content);
    }
}
var data=[
    {type:'Java',content:'java'},
    {type:'Java',content:'java2'},
    {type:'JavaScript',content:'javascript'},
    {type:'Java',content:'java3'}
];
var len = data.length-1;
for(var i=len;i>=0;i--){
    Factory(data[i].type,data[i].content);
}