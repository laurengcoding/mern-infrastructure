import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import { useState } from "react";

export default function NavBar({ user, setUser }) {

    const [navOpen, setNavOpen] = useState(false);

    function _toggleNavBar() {
        setNavOpen(!navOpen);
    };

    function handleLogOut() {
        // delegate to the users-service
        userService.logOut();
        setUser(null);
    };


    return (
        <nav className="sticky top-0 h-14 bg-sky-100 flex justify-between items-center z-50">
            <div className="pl-4">
                Logo
            </div>
            <div className="hidden lg:flex justify-between text-blue-900 font-bold pr-4">
                <Link to="/">About</Link>
                &nbsp;&nbsp;
                <Link to="/learn">Learn</Link>
                &nbsp;&nbsp;
                <Link to="/resources">Resources</Link>
                &nbsp;&nbsp;
                {user ? <span>Welcome, {user.name}</span> : <Link to="/login">Login</Link>}
                {user && <Link to="" onClick={handleLogOut}>Log Out</Link>}
            </div>
            <div className="lg:hidden">
                <button onClick={_toggleNavBar}>
                    <svg
                        className="w-6 h-6 text-blue-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        ></path>
                    </svg>
                </button>
            </div>
            {navOpen && (
                <div className="lg:hidden absolute top-14 left-0 w-full bg-sky-100 py-2 text-center">
                    <Link to="/" className="block py-1 hover:bg-blue-900 hover:text-sky-100">About</Link>
                    <Link to="/learn" className="block py-1 hover:bg-blue-900 hover:text-sky-100">Learn</Link>
                    <Link to="/resources" className="block py-1 hover:bg-blue-900 hover:text-sky-100">Resources</Link>
                    {user ? <span className="block py-1">Welcome, {user.name}</span> : <Link to="/login" className="block py-1 hover:bg-blue-900 hover:text-sky-100">Login</Link>}
                    {user && <Link to="" onClick={handleLogOut} className="block py-1 hover:bg-blue-900 hover:text-sky-100">Log Out</Link>}
                </div>
            )}
        </nav>
    )
}