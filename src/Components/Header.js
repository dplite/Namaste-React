 import { Link } from "react-router-dom"
 const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
            <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" className="logo"/>
            </div>
            <div className="nav-items">
            <ul className="list">
                <Link to="/"><li>Home</li></Link>
                <Link to="about"> <li>About Us</li></Link>
                <Link to="contact"> <li>Contact Us</li></Link>
                <li>Cart</li>
            </ul>
            </div>
            
        </div>
    )
}
export default Header