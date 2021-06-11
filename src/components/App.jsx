import "../../styles/styles.scss";
import Recipes from "./Recipes";
import RecipeTools from "../images/Recipe-Tools-32x32.png";
import RcSVG from "../images/Bad-Moms-Club.svg";

const App = () => {
  return (
    <>
      <section className="hero">
        <main>
          <section>
            <h1>G'day, let's check out Andy's Menu~</h1>

            <img src={RcSVG} alt="tools" width="300" />

            <img src={RecipeTools} alt="tools" width="300" />
            <Recipes />
          </section>
        </main>
      </section>
    </>
  );
};

export default App;
