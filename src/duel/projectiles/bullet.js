export default class Bullet {
  constructor(state, initX, initY) {
    this.state = state || {
      type: "Bullet",
      color: "white",
      hitBox: {
        height: 1,
        width: 1
      },
      position: {
        x: initX || 150,
        y: initY || 20
      }
    };
  }

  newPathing = (
    xBefore = this.state.position.x,
    yBefore = this.state.position.y
  ) => {
    return {
      x: xBefore + 0,
      y: yBefore + 1
    };
  };
}
