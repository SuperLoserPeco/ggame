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
        count: 0,
    },

    // use this for initialization
    onLoad: function () {
    },

    ctor: function() {
        console.log("zenm ehuizheyang");
        this.schedule(function(){
            console.log("hahahahahha");
        }, 1);
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
