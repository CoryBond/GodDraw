import React, { Component } from "react";
import { connect } from "react-redux";

import Helios from "./gods/helios";
import Protagonist from "./protagonists/mainProtag";
import Bullet from "./projectiles/bullet";

import projectileFactory from "./projectiles/projectileFactory";

const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32
};

let context = null;

class GodDrawDuel extends Component {
  componentDidMount = () => {
    /*window.addEventListener("keyup", this.handleKeys.bind(this, false));
    window.addEventListener("keydown", this.handleKeys.bind(this, true));
    window.addEventListener("resize", this.handleResize.bind(this, false));*/

    this.test = "test";
    context = this.refs.canvas.getContext("2d");
    context.fillStyle = "black";
    context.fillRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);

    this.updateEntities();

    setTimeout(() => {
      this.props.dispatch({
        type: "ADD_PROJECTILE",
        newProjectile: projectileFactory("Bullet")
      });
    }, 1000);
    setInterval(() => {
      this.props.dispatch({ type: "NEW_MOVEMENT", projectileFactory });
    }, 1000);
  };

  componentWillUnmount = () => {
    /*window.removeEventListener("keyup", this.handleKeys);
    window.removeEventListener("keydown", this.handleKeys);
    window.removeEventListener("resize", this.handleResize);*/
  };

  updateEntities = () => {
    if (context) {
      context.clearRect(0, 0, 840, 860);
      this.props.projectiles.forEach(entity => {
        context.fillStyle = entity.color;
        context.fillRect(
          entity.position.x,
          entity.position.y,
          entity.hitBox.width,
          entity.hitBox.height
        );
      });
    }
  };

  render() {
    this.updateEntities();
    return (
      <div style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
        <canvas
          width="840"
          height="860"
          style={{
            margin: "auto",
            textAlign: "center",
            display: "block"
          }}
          ref="canvas"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projectiles: state.projectiles
  };
};
export default connect(mapStateToProps)(GodDrawDuel);
