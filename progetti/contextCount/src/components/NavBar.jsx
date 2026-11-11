// Rounting
import { NavLink, Link } from "react-router";

export function NavBar() {

    const activeStyle = {
        color: "red",
        textDecoration: "underline"
    }

    return (
        <>
            <nav className="flex justify-center p-4 border-b border-gray-300">
                <NavLink
                    to="/"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    className="mr-4 text-decoration-none"
                >
                    Home
                </NavLink>

                <NavLink to="about"
                    style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    className="mr-4 text-decoration-none"
                >
                    About
                </NavLink>
            </nav>
        </>
    )
}