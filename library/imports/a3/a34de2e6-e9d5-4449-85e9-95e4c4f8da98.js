"use strict";
cc._RF.push(module, 'a34deLm6dVESYXpleTE+NqY', 'HomeView');
// script/module/HomeView.js

"use strict";

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
    },

    // use this for initialization
    onLoad: function onLoad() {
        console.log("is Loaded");
        // this.node.on('touchstart', function(event){
        //     console.log("mouse down");
        //     event.stopPropagation();
        // }, this);

        // this.node.on('touchend', function(event){
        //     console.log("mouse up");
        //     event.stopPropagation();
        // }, this);

        // this.node.on('mousemove', function(event){
        //     console.log("move");
        //     event.stopPropagation();
        // }, this);

        // this.node.on('mouseleave', function(event){
        //     console.log("leave");
        //     event.stopPropagation();
        // }, this);
    },

    ctor: function ctor() {
        console.log("is ctor");
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    onDestroy: function onDestroy() {
        console.log("is Destory");
    }
});

cc._RF.pop();