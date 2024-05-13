/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class WinslowCat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Winslow cat", "./WinslowCat/costumes/Winslow cat.png", {
        x: 294,
        y: 360,
      }),
    ];

    this.sounds = [new Sound("pop", "./WinslowCat/sounds/pop.wav")];

    this.triggers = [];
  }
}
