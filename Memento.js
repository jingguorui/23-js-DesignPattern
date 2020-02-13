/*
* 备忘录模式
* */

// 备忘类
class Memento {
    constructor(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }
}

// 备忘列表
class CarTaker {
    constructor() {
        this.list = [];
    }

    add(memento) {
        this.list.push(memento);
    }

    get(index) {
        return this.list[index];
    }

    getList() {
        return this.list
    }
}

// 编辑器
class Editor {
    constructor() {
        this.content = null;
    }

    setContent(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    saveContentToMemento() {
        return new Memento(this.content);
    }

    getConentFromMemento(memento) {
        this.content = memento.getContent();
    }
}

// 测试代码
let editor = new Editor()
let careTaker = new CarTaker()

editor.setContent('111')
editor.setContent('222')

careTaker.add(editor.saveContentToMemento())  // 将当前222内容备份
editor.setContent('333')
careTaker.add(editor.saveContentToMemento())  // 将当前333内容备份
editor.setContent('444')

console.log(editor.getContent())
editor.getConentFromMemento(careTaker.get(1)) // 撤销
// console.log(editor.getContent())
// editor.getConentFromMemento(careTaker.get(0)) // 撤销
// console.log(editor.getContent())
console.log(careTaker.getList())
