cc.Class({
    extends: cc.Component,

    onLoad: function () {
        (require("initFramework"))();
        (require("initGame"))(this);

        this.initMainScene();

        // var prefab = cc.ggame.resManager.getPrefab("homeView");

        // var funcTest = function() {
        //     console.log("wait B 2")
        // }

        // cc.ggame.resManager.getPrefab("homeView", function(err, prefab){
        //     console.log("wait B 1");
        //     funcTest();
        // });
        // console.log("wait C");

        // if(fs.statSync("ui").isDirectory()) {
        //     console.log("xxyyzz isDirec");
        // }
        // else{
        //     consoel.log("xxyyzz not");
        // }
        cc.ggame.viewManager.changeView("homeView");

        this.node.on("touchend", function (event) {
            console.log('反对舒服的沙发上');
        }, this);
    },

    btnBack: function() {
        cc.ggame.viewManager.backPreview();
        // if(cc.ggame.viewManager.getTopLayer()){
        //     console.log("exist !!!");
        // }
    },

    initMainScene: function() {
        this.topLayer = new (require("topLayer"))();
        cc.ggame.globalHandler.getCanvas().addChild(this.topLayer.node, cc.ggame.config.ZOrder.TOP);
    },

    testCode: function() {

    },
});
