import { UserMsg } from "./UserMsg";
import { NavLink } from "react-router-dom";



export function AppHeader() {

    return (
        <footer className='app-footer'>
            <nav className="app-nav">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about" >About</NavLink>
                <NavLink to="/toy">Toys</NavLink>
            </nav>
            <UserMsg />
        </footer>
    )
}
