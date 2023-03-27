import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";

export function UserDetailsView () {
    const {id} = useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    //App.jsx-ში რადგან /:-ის შემდეგ გვიწერია id, აქაც id უნდა დავარქვათ ცვლადს
    const get_one_user = async (user_id) => {
        try {
            setLoading(true);
            const resp = await axios.get(`https://dummyjson.com/users/${user_id}`)
            setUser(resp.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
        
    };

    useEffect(() => {
        if (id) get_one_user(id);
    }, [id])

    if (loading) {return <div>Loading...</div>;}
    if (error) {return <div>{error}</div>}
    return (
    <div>
        <p>{user?.firstName}</p>
        <p>{user?.lastName}</p>
        <p>{user?.age}</p>
        <img style={{height: "150px"}} src={user.image}/>
        <Cart user_id={user.id}/>
    </div>
    );
}