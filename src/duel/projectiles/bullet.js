export default class Bullet {
  constructor(name, level) {
    this.color = "white";
    this.hitBox = {
      height: 1,
      width: 1
    };
    this.position = {
      x: 150,
      y: 20
    };
  }

  pathing = () => {
    return {
      x: 0,
      y: 1
    };
  };
}
