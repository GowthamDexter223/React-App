import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </div>
    )
}
