import * as p5 from "p5";

import "p5/lib/addons/p5.sound";

var sketch = function (p: p5) {
  let ding: p5.SoundFile;
  let data: p5.Table;

  p.preload = () => {
    const DING_FILE = require("./ding.mp3").default;

    ding = new p5.SoundFile(DING_FILE);
    data = (p as any).loadTable("./less.csv", "csv", "header");
    //table = p.loadTable("./Users/suvirb/Downloads/less.csv");
  };

  p.setup = function () {
    //console.log("table ", table);
    p.createCanvas(p.windowWidth, p.windowHeight);

    ding.playMode("restart");
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function () {
    //console.log("data ", table);
    if (p.mouseIsPressed) {
      p.fill(0, 0, 0);
      if (ding.isLoaded()) {
        ding.play();
      }
    } else {
      p.fill(255, 0, 0);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
};

new p5(sketch);
