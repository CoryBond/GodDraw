import React, { Component } from "react";
import { connect } from "react-redux";

//import God from "./God";
import Protagonist from "./protagonists/mainProtag";
import Bullet from "./projectiles/bullet";

const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32
};

class GodDrawDuel extends Component {
  componentDidMount = () => {
    /*window.addEventListener("keyup", this.handleKeys.bind(this, false));
    window.addEventListener("keydown", this.handleKeys.bind(this, true));
    window.addEventListener("resize", this.handleResize.bind(this, false));*/

    this.context = this.refs.canvas.getContext("2d");
    this.context.fillStyle = "black";
    this.context.fillRect(
      0,
      0,
      this.refs.canvas.width,
      this.refs.canvas.height
    );

    this.entities = [new Bullet()];
    this.updateEntities();
  };

  componentWillUnmount = () => {
    /*window.removeEventListener("keyup", this.handleKeys);
    window.removeEventListener("keydown", this.handleKeys);
    window.removeEventListener("resize", this.handleResize);*/
  };

  updateEntities = () => {
    this.entities.forEach(entity => {
      this.context.fillStyle = entity.color;
      this.context.fillRect(
        entity.position.x,
        entity.position.y,
        entity.hitBox.width,
        entity.hitBox.height
      );
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
        <canvas style={{ width: "100%", height: "100%" }} ref="canvas" />
      </div>
    );
  }
}

export default connect()(GodDrawDuel);
