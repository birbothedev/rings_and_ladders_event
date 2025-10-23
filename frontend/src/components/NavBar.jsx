import { Link } from "react-router-dom"

export function NavBar(){
    return (
        <> 
            <nav className="navbar rounded-box shadow-base-300/20 shadow-sm">
                <div className="navBar-container">
                    <Link to="/" className="nav-link">Home</Link>
                </div>
                <div className="navBar-links">
                    <Link to="/teampage" className="nav-link">Team</Link>
                    <Link to="/adminpage" className="nav-link">Admin</Link>
                </div>
            </nav>
        </>
    )
}