import { useState } from "react";

export const Header = () => {
    const [loginText,setLoginText] = useState('Login');
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
                    <li className="navbar-item"><a href="./">Home</a></li>
                    <li className="navbar-item"><a href="./">About Us</a></li>
                    <li className="navbar-item"><a href="./">Orders</a></li>
                    <li className="navbar-item"><a href="./">Cart <img className='cart-logo-img' src = {require("../static-resources/images/cart-logo.jpg")}/></a></li>
                    <li className="navbar-item"><button onClick={loginHandler}>{loginText}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;