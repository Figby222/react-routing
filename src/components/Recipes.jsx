import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CookiesRecipe from "./CookiesRecipe";

function RecipeSelection() {
    return (
        <section className="recipeSelection">
            <h2>Choose your recipe!</h2>
            <ul>
                <li>
                    <Link to="cookies">Super Cookies!</Link>
                </li>
            </ul>
        </section>
    )
}
function Recipes() {
    const { recipe } = useParams();
    
    return (
        <>
            <h1>Some good recipes!</h1>
            {
                recipe === "cookies" ? <CookiesRecipe /> :
                <RecipeSelection />
            }
            { 
                recipe && 
                <Link to="/recipes">
                    Click here to go to recipes!
                </Link> ||
                <Link to="/">Click here to go home!</Link>
            }
        </>
    )
}

export default Recipes;