import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oh no, this route doesn't exist!</h1>
            <Link to="/">
                You can go back to the home page by clicking here, though!
            </Link>
            <p>
                Or you can {" "}
                <Link to="/profile/DefaultProfile">
                    go to the default profile by clicking here!
                </Link>
            </p>
        </div>
    );
};

export default ErrorPage;