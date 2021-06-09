import "../styles/styles.scss";

const elvenShieldRecipe = {
  leatherStrips: 12,
};
const slvenGauntLEtRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
};
console.log(elvenShieldRecipe, slvenGauntLEtRecipe);
