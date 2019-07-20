export default class Protagonist {
  constructor(name, level) {
    this.color = "white";
    this.hitBox = {
      height: 10,
      width: 10
    };
    this.position = {
      x: 150,
      y: 20
    };
  }

  pathing = () => {};
}
