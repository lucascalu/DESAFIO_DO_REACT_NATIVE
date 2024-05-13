/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Jesse extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Jesse", "./Jesse/costumes/Jesse.png", { x: 266, y: 360 }),
    ];

    this.sounds = [
      new Sound("pop", "./Jesse/sounds/pop.wav"),
      new Sound("chord", "./Jesse/sounds/chord.wav"),
      new Sound("horse", "./Jesse/sounds/horse.wav"),
      new Sound("cheer", "./Jesse/sounds/cheer.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    yield* this.sayAndWait("Olá Seja bem vindo ao desafio do react native", 2);
    yield* this.askAndWait("Qual seu nome?");
    yield* this.sayAndWait("*Olá* " + this.answer, 2);
    yield* this.askAndWait(
      "(:*O axios é uma biblioteca que serve para consumir apis?*:)"
    );
    if (this.answer === "SIM" || this.answer === "sim") {
      yield* this.startSound("chord");
      yield* this.sayAndWait("(:*Muito bem!*:)", 2);
      this.stage.vars.score++;
    } else {
      yield* this.sayAndWait("*Ops!:(", 2);
      yield* this.startSound("horse");
    }
    yield* this.askAndWait(
      "(:*Fale um tipo de requisição que  é possível ser feita com o código do github fornecido na aula(OBS:ESCREVA EM MAIUSCULO*:)"
    );
    if (this.answer === "GET" || this.answer === "POST") {
      yield* this.startSound("chord");
      this.stage.vars.score++;
      yield* this.sayAndWait("(:*MUITO BEM!* :)", 2);
    } else {
      yield* this.sayAndWait("*OPS!:(", 2);
      yield* this.startSound("horse");
    }
    yield* this.askAndWait(
      "(:*Os valores da api dentro do react native ficam guardados dentro de variáveis?:)  "
    );
    if (this.answer === "SIM" || this.answer === "sim") {
      yield* this.startSound("chord");
      this.stage.vars.score++;
      yield* this.sayAndWait("(:*Muito bem!* :)", 2);
    } else {
      yield* this.sayAndWait("*Ops!:(", 2);
      yield* this.startSound("horse");
    }
    yield* this.askAndWait(
      "(:*Qual linguagem está rodando a api que termina com js?:)  "
    );
    if (this.answer === "NODEJS" || this.answer === "nodejs") {
      yield* this.startSound("chord");
      this.stage.vars.score++;
      yield* this.sayAndWait("(:*Muito bem* :)", 2);
    } else {
      yield* this.sayAndWait("*Errou!:(", 2);
      yield* this.startSound("horse");
    }
    yield* this.askAndWait(
      "(:*No codigo em nodejs qual comando roda minha aplicação?:)  "
    );
    if (this.answer === "NODE" || this.answer === "node") {
      yield* this.startSound("chord");
      this.stage.vars.score++;
      yield* this.sayAndWait("(:*Perfeito!* :)", 2);
    } else {
      yield* this.sayAndWait("*Sinto muito!:(", 2);
      yield* this.startSound("horse");
    }
    yield* this.askAndWait(
      "(:*É verdade que preciso rodar um arquivo do tipo node e um do tipo react native para consumir minha api*:)  "
    );
    if (this.answer === "SIM" || this.answer === "sim") {
      yield* this.startSound("chord");
      this.stage.vars.score++;
      yield* this.sayAndWait("(:*Correto!* :)", 2);
    } else {
      yield* this.sayAndWait("*incorreto!:(", 2);
      yield* this.startSound("horse");
    }
    yield* this.askAndWait(
      " (:*É verdade que o react native consegue consumir dados direto do mysql?*:)  "
    );
    if (this.answer === "NAO" || this.answer === "nao") {
      yield* this.startSound("chord");
      this.stage.vars.score++;
      yield* this.sayAndWait("(:*OK!* :)", 2);
    } else {
      yield* this.sayAndWait("*Vish!:(", 2);
      yield* this.startSound("horse");
    }
    yield* this.askAndWait(
      "O react native consumindo api se comporta como front end?"
    );
    if (this.answer === "SIM" || this.answer === "sim") {
      yield* this.startSound("chord");
      this.stage.vars.score++;
      yield* this.sayAndWait("(:*Excelente* :)", 2);
    } else {
      yield* this.sayAndWait("*Desculpe incorreto!:(", 2);
      yield* this.startSound("horse");
    }
    yield* this.sayAndWait("Parabéns você conclui o quiz!", 2);
    yield* this.sayAndWait(
      "Sua pontuação," + this.toString(this.stage.vars.score),
      2
    );
    yield* this.startSound("cheer");
  }
}
