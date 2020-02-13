/*
* 组合模式
* */

var Org = function(name){
    this.name = name ;
    this.depts = [] ;
};
Org.prototype = {
    constructor:Org ,
    addDepts:function(child){//形参不写数据类型
        this.depts.push(child);//this一般指的是Org对象
        return this ;
    } ,
    getDepts:function(){
        return this.depts;
    }
};


var Dept = function(name){
    this.name = name ;
    this.persons = [] ;
};
Dept.prototype = {
    constructor:Dept ,
    addPersons: function(child){
        this.persons.push(child);
        return this ;
    } ,
    getPersons:function(){
        return this.persons;
    }
};

var Person = function(name){
    this.name = name ;
};
Person.prototype = {
    constructor : Person ,
    hardworking : function(){
        document.write(this.name + '...努力工作!');
    } ,
    sleeping : function(){
        document.write(this.name + '...努力睡觉!');
    }
};


var p1 = new Person('张1');
var p2 = new Person('张2');
var p3 = new Person('张3');
var p4 = new Person('张4');
var p5 = new Person('张5');
var p6 = new Person('张6');

var dept1 = new Dept('开发部门');
var arr=dept1.addPersons(p1).addPersons(p2).addPersons(p3);
console.log(arr)
var dept2 = new Dept('销售部门');
dept2.addPersons(p4).addPersons(p5).addPersons(p6);

// var org = new Org('bjsxt');
// org.addDepts(dept1).addDepts(dept2);

// 需求： 具体的让一个人（张3）去努力工作
// org.getDepts()
// org.hardworking('开发部门');
// for(var i = 0 ,depts = org.getDepts(); i<depts.length;i++ ){//for循环中也不写数据类型
//     for(var j = 0 ,persons = depts[i].getPersons(); j < persons.length ; j++){
//         if(persons[j].name === '张6'){
//             persons[j].hardworking();
//         }
//     }
// }

// 寄生式继承--------------------------------------------------------
function inheritPrototype(subClass, superClass) {
    function F() {}
    F.prototype = superClass.prototype;

    var p = new F();
    p.constructor = subClass;

    subClass.prototype = p;
}

/*
 * 虚拟类
 */
var News = function() {
    // 子组件容器
    this.children = [];

    // 当前组件元素
    this.element = null;
};

News.prototype = {
    init: function() {
        throw new Error('请重写你的方法');
    },
    add: function() {
        throw new Error('请重写你的方法');
    },
    getElement: function() {
        throw new Error('请重写你的方法');
    }
};

/*
 * 容器类构造函数
 */
var Container = function(id, parent) {
    // 构造函数继承类
    News.call(this);

    // 模块ID
    this.id = id;
    // 模块的父容器
    this.parent = parent;

    // 构建方法
    this.init();
};

inheritPrototype(Container, News);

Container.prototype.init = function() {
    this.element = document.createElement('ul');
    this.element.id = this.id;
    this.element.className = 'new-container';
};

Container.prototype.add = function(child) {
    // 在子元素容器中插入子元素
    this.children.push(child);

    // 插入当前组件元素树中
    this.element.appendChild(child.getElement());

    return this;
};

// 获取当前元素方法
Container.prototype.getElement = function() {
    return this.element;
};

// 显示方法
Container.prototype.show = function() {
    this.parent.appendChild(this.element);
};



/*
 * 子类
 */
var Item = function(classname) {
    News.call(this);
    this.classname = classname || '';
    this.init();
};

inheritPrototype(Item, News);

Item.prototype.init = function() {
    this.element = document.createElement('li');
    this.element.className = this.classname;
};
Item.prototype.add = function(child) {
    this.children.push(child);
    this.element.appendChild(child.getElement());

    return this;
};
Item.prototype.getElement = function() {
    return this.element;
};


/*
 * 新闻组类
 */
var NewsGroup = function(classname) {
    News.call(this);
    this.className = classname || '';
    this.init();
};

inheritPrototype(NewsGroup, News);

NewsGroup.prototype.init = function() {
    this.element = document.createElement('div');
    this.element.className = this.classname;
};
NewsGroup.prototype.add = function(child) {
    this.children.push(child);
    this.element.appendChild(child.getElement());

    return this;
};
NewsGroup.prototype.getElement = function() {
    return this.element;
};



/*
 * 创建图片新闻类
 */
var ImageNews = function(url, href, classname) {
    News.call(this);

    this.url = url || '';
    this.href = href || '';
    this.classname = classname || 'normal';
    this.init();
};

inheritPrototype(ImageNews, News);

ImageNews.prototype.init = function() {
    this.element = document.createElement('a');
    var img = new Image();
    img.src = this.url;
    this.element.appendChild(img);
    this.element.className = 'image-news ' + this.classname;
    this.element.href = this.href;
};
ImageNews.prototype.add = function() {};
ImageNews.prototype.getElement = function() {
    return this.element;
};


/*
 * 基类
 */
var IconNews = function(text, href, type) {
    News.call(this);
    this.text = text || '';
    this.href = href || '#';
    this.type = type || 'video';
    this.init();
};

inheritPrototype(IconNews, News);

IconNews.prototype.init = function() {
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = this.classname;
};
IconNews.prototype.add = function() {};
IconNews.prototype.getElement = function() {
    return this.element;
};

/*
 * 基类
 */
var EasyNews = function(text, href) {
    News.call(this);
    this.text = text || '';
    this.href = href || '';
    this.init();
};

inheritPrototype(EasyNews, News);

EasyNews.prototype.init = function() {
    this.element = document.createElement('a');
    this.element.innerHTML = this.text;
    this.element.href = this.href;
    this.element.className = 'text';
};
EasyNews.prototype.add = function() {};
EasyNews.prototype.getElement = function() {
    return this.element;
};

/*
 * 创建新闻模块
 */
var news1 = new Container('news', document.body);
news1.add(
    new Item('normal').add(
        new IconNews('哈哈哈', '#', 'video')
    )
).add(
    new Item('normal').add(
        new IconNews('呵呵呵', '#', 'live')
    )
).add(
    new Item('normal').add(
        new NewsGroup('has-img').add(
            new ImageNews('img/1.jpg', '#', 'small')
        ).add(
            new EasyNews('aaaa', '#')
        ).add(
            new EasyNews('五大雷人跑步机', '#')
        )
    )
).show();