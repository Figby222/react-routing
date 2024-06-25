import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Recipes() {
    const { recipe } = useParams();
    
    return (
        <>
            <h1>Some good recipes!</h1>
            {
                (recipe === "SuperCookies") ? <SuperCookies /> :
                <section className="recipeSelection">
                    <h2>Choose your recipe!</h2>
                    <ul>
                        <li>
                            
                        </li>
                    </ul>
                </section>
            }
            <Link to="/">Click here to go back!</Link>
        </>
    )
}

export default Recipes;