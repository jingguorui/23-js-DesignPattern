/*
* 中介者模式
* */
function A(mediator) {
    this.mediator = mediator;
}
A.prototype = {
    send: function(msg,receiver) {
        this.mediator.send(msg,'A',receiver);
    },
    receiveMsg: function(msg,sender) {
        console.log(sender+" say:"+msg)
    }
}

function B(mediator) {
    this.mediator = mediator;
}
B.prototype = {
    send: function(msg,receiver) {
        this.mediator.send(msg,'B',receiver);
    },
    receiveMsg: function(msg,sender) {
        console.log(sender+" say:"+msg)
    }
}
function Mediator() {
    this.A = new A(this);
    this.B = new B(this);
}
Mediator.prototype = {
    send: function(msg,sender,receiver) {
        try {
            this[receiver].receiveMsg(msg,sender);
        }
        catch(err) {
            console.log('receiver '+receiver+' is not exsit');
            this[sender].receiveMsg('receiver '+ receiver +' is not exsit','mediator');
        }
    }
}

var _mediator = new Mediator();
var _a = new A(_mediator);
var _b = new B(_mediator);
_a.send('hello i am A','B');
_b.send('hello i am B','A');