export const castLightning = () => ({
  type: "CAST_LIGHTNING"
});

export const castFire = () => ({
  type: "CAST_FIRE"
});

export const castWind = () => ({
  type: "CAST_WIND"
});

export const shootBullet = () => ({
  type: "SHOOT_BULLET"
});

export const defeatedGod = godName => ({
  type: "DEFEATED_GOD",
  godName
});

export const died = () => ({
  type: "DIED"
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
