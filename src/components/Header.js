export const Header = () => {
    return (
        <div className="header">
            <div className="logo-img">
                <img src={require("../static-resources/images/app-logo.jpg")}/>
            </div>
            <div className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="./">Home</a></li>
                    <li className="navbar-item"><a href="./">About Us</a></li>
                    <li className="navbar-item"><a href="./">Orders</a></li>
                    <li className="navbar-item"><a href="./">Cart <img className='cart-logo-img' src = {require("../static-resources/images/cart-logo.jpg")}/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;