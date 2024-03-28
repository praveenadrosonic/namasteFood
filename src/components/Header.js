import { useState,useEffect } from "react";
import {Link} from "react-router-dom"

export const Header = () => {
    const [loginText,setLoginText] = useState('Logout');
    const loginHandler = () => {
        if(loginText === 'Login') {
            setLoginText('Logout');
        } else {
            setLoginText('Login');
        }
    }
    return (
       
        <div className="header">
             
            <div className="logo-img">
                <img src={require("../static-resources/images/app-logo.jpg")} alt='logo-img'/>
            </div>
            <div className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><Link to="./">Home</Link></li>
                    <li className="navbar-item"><Link to="/aboutus">About Us</Link></li>
                    <li className="navbar-item"><Link to="./">Orders</Link></li>
                    <li className="navbar-item"><Link to="./">Cart <img className='cart-logo-img' src = {require("../static-resources/images/cart-logo.jpg")}/></Link></li>
                    <li className="navbar-item"><button onClick={loginHandler}>{loginText}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
