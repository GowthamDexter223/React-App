import { useState } from "react"

export const Products = (val: any) => {

    const [show, setshow] = useState(false);
    function displayMore() {
        setshow((showMore) => {
            return !showMore;
        })
    }
    return (
        // <tr>
        //     <td>{val.product.id}</td>
        //     <td>{val.product.title}</td>
        //     <td>{val.product.price}</td>
        //     <td>{val.product.category}</td>
        // </tr>
        <>
            <div>
                <img src={val.product.image} width={50}></img>
                <p><button onClick={displayMore}>Show More</button></p>
                {show &&
                    <div>
                        <p>Title: {val.product.title}</p>
                        <p>Price: {val.product.price}</p>
                        <p>Category: {val.product.category}</p>
                    </div>
                }
            </div>
        </>
    )
}
