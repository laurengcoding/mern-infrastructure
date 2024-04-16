import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        // delegate to the users-service
        userService.logOut();
        setUser(null);
    }

    return (
        <nav className="bg-blue">
            <Link to="/">About</Link>
            {/* &nbsp; | &nbsp; */}
            <Link to="/learn">Learn</Link>
            {/* &nbsp;&nbsp; */}
            <Link to="/resources">Resources</Link>
            {/* &nbsp;&nbsp; */}
            <span>Welcome, {user.name}</span>
            {/* &nbsp;&nbsp; */}
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}