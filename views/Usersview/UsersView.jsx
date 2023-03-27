import {useState, useEffect} from "react";
import axios from "axios"; 
import { User } from "./components/User";
import "./UsersView.css"


export function Usersview () {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const get_users = async () => {
        setLoading(true);
        const resp = await axios.get("https://dummyjson.com/users");
        setUsers(resp.data?.users);
        setLoading(false);
    };
    useEffect(() => {
        get_users()
    }, []);

    return (
        <div>
            <h1>Users</h1>
            {loading ? (
            <div>Loading...</div>
            ) : (
                <div className="users-container">
            {users.map((mappeduser) => {
                return <User key={mappeduser?.id} user={mappeduser}/>
                })}
            </div>
            )}
        </div>
    );
}