import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../features/cartSlice'

export const Product = ({ value }: any) => {

  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <h2>{value.title}</h2>
      <h2>{value.category}</h2>
      <button onClick={toggle ? () => {dispatch(addToCart(value)); setToggle(current => !current);} : () => {dispatch(removeFromCart(value.id)); setToggle(current => !current);} }>{toggle ? "Add" : "Remove"}</button>
    </div>
  )
}
