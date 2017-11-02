var timerCount = 0;

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        self: cc.Component, //用挂载在scene上的脚本作为计时器
    },

    // use this for initialization

    ctor: function() {
    },

    init: function(self) {
        this.self = self;
    },

    updateTimer: function() {
        timerCount = timerCount + 1;
        console.log("wo ca");
        console.log("test Work = " + timerCount);
    },

    startTimer: function(){
        timerCount = 0;
        this.self.schedule(this.updateTimer, 1);
    },

    stopTimer: function(){
        timerCount = 0;
        console.log("停下!!");
        this.self.unschedule(this.updateTimer);
    },

    dosomething: function(){
        console.log("dsgfsdagvdga");
        // console.log("this.count = " + this.count);
        // this.count = this.count + 1;
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
