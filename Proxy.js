/*
* 代理模式
* */
class ReadImg {
    constructor(fileName) {
        this.fileName = fileName;
        this.loadFromDisk();   // 初始化即从硬盘中加载，模拟
    }
    // display 对外提供一个方法
    display() {
        console.log('display...' + this.fileName);
    }
    loadFromDisk() {
        console.log('loading...' + this.fileName);
    }
}
// 生成代理
class ProxyImg {
    constructor(fileName) {
        this.realImg = new ReadImg(fileName)
    }
    display() {
        this.realImg.display()
    }
}

// test
let proxyImg = new ProxyImg('1.png')
proxyImg.display()   // 打印结果为 1. loading...1.png   2. display...1.png
