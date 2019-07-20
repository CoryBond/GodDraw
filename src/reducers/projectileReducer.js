export default (state = [], action) => {
  switch (action.type) {
    case "CAST_WIND":
      return state.append({});
    case "CAST_FIRE":
      return state.append({});
    case "SHOOT_BULLET":
      return state.append({});
    default:
      return state;
  }
};
