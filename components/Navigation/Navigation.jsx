import { Link } from "react-router-dom";
import "./Navigation.css";

export function Navigation () {
    return <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
    </nav>
}