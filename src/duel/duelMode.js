import React, { Component } from "react";
import { connect } from "react-redux";
import God from "./God";
import Protagonist from "./Protagonist";
import { randomNumBetweenExcluding } from "./helpers";

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
  handleResize(value, e) {
    this.setState({
      screen: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  }

  componentDidMount() {
    window.addEventListener("keyup", this.handleKeys.bind(this, false));
    window.addEventListener("keydown", this.handleKeys.bind(this, true));
    window.addEventListener("resize", this.handleResize.bind(this, false));

    const context = this.refs.canvas.getContext("2d");
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeys);
    window.removeEventListener("keydown", this.handleKeys);
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    state.duelScreen.entities.forEach(entity => {
      ctx.fillStyle = rect.color;
      ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    });
    return <canvas ref="duelScreen" />;
  }
}

export default connect()(GodDrawDuel);
