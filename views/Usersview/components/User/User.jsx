import { useNavigate } from "react-router-dom";
import "./User.css"

export function User ({user}) {
    const navigate = useNavigate();
    return (
    <div className="user">
        <img className="user__image" src={user.image}/>
        <div className="user__info">
            <p>
                <b>{user.firstName}</b>
            </p>
            <p>
                <b>{user.lastName}</b>
            </p>
            <p>{user.age}</p>
        </div>
        <button onClick={() => navigate(`/user/${user.id}`)}>Detailed information</button>        
    </div>
    );
}