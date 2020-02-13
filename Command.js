/*
* 命名模式
* */


//命令1
var closeDoorCommand = {
    execute: function() {
        console.log('close door');
    },
};
//命令2
var openPcCommand = {
    execute: function() {
        console.log('open pc');
    },
};
//命令3
var openQQCommand = {
    execute: function() {
        console.log('login qq');
    },
};
//宏命令对象
var MacroCommand = function() {
    return {
        commandList: [],
        add: function(command) {
            this.commandList.push(command);
        },
        execute: function() {
            for (var i = 0, command; command = this.commandList[i++];) {
                command.execute();
            }
        },
    };
};
//实例
var macroCommand = MacroCommand();

macroCommand.add(closeDoorCommand);
macroCommand.add(openPcCommand);
macroCommand.add(openQQCommand);

macroCommand.execute();
var arr=[]
console.log(arr[1])