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
      <h3>Today's Special: </h3>
      <div>
        <button onClick={() => setRecipe(elvenShieldRecipe)}>
          ~Wine with Cheeses~
        </button>
      </div>
      <div>
        <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
          ~Beer with Chips~
        </button>
      </div>
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
