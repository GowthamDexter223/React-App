import { CartState } from "../Context/CartContext"

export const Products = () => {
    
    console.log(CartState().cart.products)
    
    return (
        <div>Products</div>
    )
}
