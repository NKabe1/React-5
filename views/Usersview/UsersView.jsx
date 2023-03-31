import {useState, useEffect} from "react";
import axios from "axios"; 
import { User } from "./components/User";
import "./UsersView.css"


export function Usersview () {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState("");
    const get_users = async () => {
        setLoading(true);
        const resp = await axios.get("https://dummyjson.com/users");
        setUsers(resp.data?.users);
        setLoading(false);
    };
    useEffect(() => {
        get_users()
    }, [searchKeyword]);

    return (
        <div>
            <h1>Users</h1>
            <input placeholder="Search user by first name/last name" className="users-input" onChange={(e) => setSearchKeyword(e.target.value)}/>
            {loading ? (
            <div>Loading...</div>
            ) : (
                <div className="users-container">
            {users.map((mappeduser) => {
                if(mappeduser.firstName.toLocaleLowerCase().includes(searchKeyword) || mappeduser.lastName.toLocaleLowerCase().includes(searchKeyword)) {
                    return <User key={mappeduser?.id} user={mappeduser}/>
                }
                })}
            </div>
            )}
        </div>
    );
}