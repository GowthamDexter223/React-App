import { CartState } from "../ContextAPI/Context/CartContext";

const Home = () => {
    console.log(CartState())
    return(
        <div> Home Component </div>
    )
}
export default Home;