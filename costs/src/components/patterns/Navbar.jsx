import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbarContainer">
            <div className="elementNavbar">
                <Link to="/">Home</Link>
                <Link to="/projects">Projetos</Link>
                <a>Empresa</a>
                <a>Contato</a>
            </div>
        </div>
    )
}

export default NavBar;