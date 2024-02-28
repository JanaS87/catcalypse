import "../styles/Header.css";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <header>
                <h1 className={"title"}>Welcome to Catcalypse</h1>
                <h2 className={"second-title"}>Where Cats rule the world</h2>

            <nav className={"navigation"}>
                <ul className={"navigation-list"}>
                    <li><Link to={"/"} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                    <li><Link to={"/onlyCats"} className={location.pathname === '/onlyCats' ? 'active' : ''}>OnlyCats</Link></li>
                </ul>
            </nav>
        </header>
    )
}