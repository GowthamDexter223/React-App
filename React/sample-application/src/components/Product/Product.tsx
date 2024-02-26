import productList from "../Data/Data"
import { Products } from "./Products"

export const Product = () => {
    return (
        <>
            {/* <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
                {productList.map((val) => {
                    return (
                       <Products product={val} key={val.id} />
                    )
                })}
            </table> */}
            <div>
                {productList.map((val) => {
                    return (
                        <Products product={val}/>
                    )
                })}
            </div>
        </>
    )
}
