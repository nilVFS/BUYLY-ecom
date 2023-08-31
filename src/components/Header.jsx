import { NavLink, Link } from "react-router-dom";

export default function Header() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <Link className="site--logo" to="/"></Link>
            <nav>
                <NavLink to="/" style={({isActive}) => isActive ? activeStyles : null}>
                    Home
                </NavLink>
                <NavLink to="/store" style={({isActive}) => isActive ? activeStyles : null}>
                    Store
                </NavLink>
                <NavLink to="/about" style={({isActive}) => isActive ? activeStyles : null}>
                    About
                </NavLink>
            </nav>
        </header>
    )
}