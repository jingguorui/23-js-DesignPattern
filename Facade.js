/*
* 外观模式
* */
//用于解决dom侦听事件的添加
function addEventToDOM(dom,type,fn){
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false);
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type,fn);
    }else{
        dom[on+'type'] = fn ;
    }
}