import { Link } from "react-router-dom";

export function FourOhFour () {
    return (
    <div>
        <h1>404</h1>
        <h3>This page doesn't exist</h3>
        <Link to="/">Return to Home Page</Link>
    </div>
    );
}