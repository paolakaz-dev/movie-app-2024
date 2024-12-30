
import { Link } from "react-router-dom"
import { useCartContext } from "./useContext/context"
import cartimg from "./assets/grocery-store.png"


function Badge() {
    const {cart} = useCartContext();
    return (
        <Link to="/cart">
            <div className="top-badge">
                <img src={cartimg} alt="" />
                <p>{cart.length}</p>
            </div>
        </Link>
    )
}

export default Badge