import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { initProducts } from "../features/cartSlice";

export const Products = () => {

  const dispatch = useDispatch();

  const products =  useSelector((state) => state?.cart?.products)

  console.log(products)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(response => dispatch(initProducts(response.data)));
  }, [])
  return (
    <div>Products</div>
  )
}
