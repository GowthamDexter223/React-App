import { Link } from "react-router-dom"

export const Nav = () => {
    return (
        <div>
            {/* <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/product">Product</Link>
                </li>
            </ul> */}
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/counter">Counter</a>
                </li>
                <li>
                    <a href="/product">Product</a>
                </li>
                <li>
                    <a href="/form">Form</a>
                </li>
                <li>
                    <a href="/table">Table</a>
                </li>
                <li>
                    <a href="/cartcontext">Cart</a>
                </li>
                <li>
                    <a href="/newproduct">New Product</a>
                </li>
            </ul>
        </div>
    )
}
