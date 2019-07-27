import Bullet from "./bullet";

export default (type, state, ...params) => {
  switch (type) {
    case "Bullet":
      return new Bullet(state, ...params);
    default:
      return {};
  }
};
