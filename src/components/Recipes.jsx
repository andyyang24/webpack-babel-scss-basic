import { useState } from "react";

const elvenShieldRecipe = {
  Wine: 2,
  Salt: 1,
  Cheeses: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  Greens: 1,
  Beef: 4,
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
        {Object.keys(recipe).map((food) => (
          <li key={food}>
            {food} : {recipe[food]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
