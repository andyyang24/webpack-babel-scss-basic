import { useState } from "react";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonStone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elvenShieldRecipe, elvenGauntletsRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current dsadf Recipe: </h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        Elven Gauntlet Recipe
      </button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material} : {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
