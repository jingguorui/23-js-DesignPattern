/*
* 构建者模式
* */
/*房子模型*/
function House() {
    if (!this instanceof House){
        return new House();
    }
    this.bedRoom = 'bed room';
    this.livingRoom = 'living room';
    this.restRoom = 'rest room'
}


/*具体建造类，做具体的事情*/
function Worker() {
    if (!this instanceof Worker){
        return new Worker();
    }
    this.zaomen = function () {
        console.log('造门');
    }
    this.leiqiang = function () {
        console.log('垒墙');
    }
    this.ankuanghu = function () {
        console.log('安窗户');
    }
    this.get_house = function () {
        var house = new House();
        return house;
    }
}


/*总指挥者，分配人员做具体的事情*/
function Director() {
    if (!this instanceof Director){
        return new Director();
    }
    this.direct_build = function (worker) {
        worker.zaomen();
        worker.ankuanghu();
        worker.leiqiang();
    }
}


/*客户提需求，总的执行过程,房主请director建房子，director负责人员管理调度，不做具体的事情，房主从工人手中取得房子。*/
var worker = new Worker();
var director = new Director(worker);
director.direct_build(worker);
var succ_house = worker.get_house();
console.log(succ_house);