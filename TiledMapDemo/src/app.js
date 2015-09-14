
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);







        // add tiled map to screen
        //var map = cc.TMXTiledMap.create("res/tmx_desert_spacing.tmx")
        var map = new cc.TMXTiledMap(res.tmw_desert_spacing_tmx);
        map.attr({
            x: 0,
            y: 0
        });
        this.addChild(map, 10);

        var collisionLayer = map.getLayer("collisionLayer");
        collisionLayer.setVisible(false);

        var objLayer = map.getObjectGroup("objLayer");
        var obj = objLayer.getObject("playPoint");


        var bgLayer = map.getLayer("bgLayer");
        var tile1 = bgLayer.getTileAt(cc.p(0, 0));
//        var tile2 = bgLayer.getTileAt(0, 0);

        var p = bgLayer.getPositionAt(0, 0)
        cc.log(p.x, p.y);




        var pros = map.getProperties();
        cc.log(pros);
        var pro = map.getProperty("desc");
        cc.log("desc = " + pro);

        var pLayer = bgLayer.getProperties();
        cc.log(pLayer);

        var gLayer = objLayer.getProperties();
        cc.log(gLayer);
        var objs = objLayer.getObjects();
        cc.log(objs);





        // add "HelloWorld" splash screen"
//        this.sprite = new cc.Sprite(res.HelloWorld_png);
//        this.sprite.attr({
//             x: size.width / 2,
//             y: size.height / 2
//        });
//        this.addChild(this.sprite, 0);








        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

