import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Jesse from "./Jesse/Jesse.js";
import WinslowCat from "./WinslowCat/WinslowCat.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Jesse: new Jesse({
    x: 105,
    y: -28.05000000000001,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 85,
    visible: true,
    layerOrder: 2,
  }),
  WinslowCat: new WinslowCat({
    x: -165,
    y: 89,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50.000000000000014,
    visible: true,
    layerOrder: 1,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
