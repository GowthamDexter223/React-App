import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../features/cartSlice';

export const Cart = () => {

  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart.cart);

  const product = useSelector((state: any) => state.cart.product);
  
  //console.log(product)
  
  return (
    <>
      <div>
        {cart.map((x: any) => (
          <div>
            <h2>{x.title}</h2>
            <h2>{x.category}</h2>
            <button onClick={() => dispatch(removeFromCart(x.id))}>Remove</button>
          </div>
        ))}
      </div>
    </>
  )
}
