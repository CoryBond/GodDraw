export default (state = [], action) => {
  switch (action.type) {
    case "ADD_PROJECTILE":
      state.push(action.newProjectile.state);
      return state;
    case "NEW_MOVEMENT":
      // Rehydrate the projectile to get its behavior then save its state.
      const newState = state.map(projectileState => {
        const newProjectile = action.projectileFactory(
          projectileState.type,
          projectileState
        );

        const newLocation = newProjectile.newPathing();
        newProjectile.state.position.x = newLocation.x;
        newProjectile.state.position.y = newLocation.y;
        return newProjectile.state;
      });
      return newState;
    case "REMOVE_ENTITIES":
      return state.filter((_, index) => {
        return !action.elementsOffScreen.has(index);
      });
    default:
      return state;
  }
};
