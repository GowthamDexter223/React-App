import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "./Product";
import { getProducts } from "../features/productsSlice";

export const Products = () => {

  const dispatch = useDispatch();

  const { product, status } = useSelector((state) => state?.product)

  const cart = useSelector((state) => state?.cart?.cart)

  //console.log(products)

  useEffect(() => {
    //axios.get("https://fakestoreapi.com/products").then(response => dispatch(initProducts(response.data)));
    dispatch(getProducts())
  }, [])

  if (status === "loading") {
    return <h2>Loading...</h2>
  }

  if (status === "error") {
    return <h2>Something went wrong</h2>
  }
  return (
    <div>
      <h3>Cart:{cart.length}</h3>
      {product.map((prod: any) => {
        return <Product key={prod.id} value={prod} />
      })
      }</div>
  )
}
