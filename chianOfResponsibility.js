/*
* 职责链模式
* */
class Handler {
    constructor() {
        this.next = null;
    }

    setNext(handler) {
        this.next = handler;
    }
}

class LogHandler extends Handler {
    constructor(...props) {
        super(...props);
        this.name = "log";
    }

    handle(level, msg) {
        if (level === this.name) {
            console.log(`LOG: ${msg}`);
            return;
        }
        debugger
        this.next && this.next.handle(...arguments);
    }
}

class WarnHandler extends Handler {
    constructor(...props) {
        super(...props);
        this.name = "warn";
    }

    handle(level, msg) {
        if (level === this.name) {
            console.log(`WARN: ${msg}`);
            return;
        }
        debugger
        this.next && this.next.handle(...arguments);
    }
}

class ErrorHandler extends Handler {
    constructor(...props) {
        super(...props);
        this.name = "error";
    }

    handle(level, msg) {
        debugger
        if (level === this.name) {
            console.log(`ERROR: ${msg}`);
            return;
        }
        this.next && this.next.handle(...arguments);
    }
}

/******************以下是测试代码******************/

let logHandler = new LogHandler();
let warnHandler = new WarnHandler();
let errorHandler = new ErrorHandler();

// 设置下一个处理的节点
logHandler.setNext(warnHandler);
warnHandler.setNext(errorHandler);

logHandler.handle("error", "Some error occur");