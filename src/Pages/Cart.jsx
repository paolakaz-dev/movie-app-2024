/*
    export default () => {
    
    }

        OR

    const Cart =  () => {
    
    }

    export default Cart;

    useContext: https://www.youtube.com/watch?v=5LrDIWkK_Bc - no prop dilling anymore (replace)
    examples: https://github.com/dugalcedo/use-context-tutorial
*/

import { useCartContext } from "../useContext/context"
import "../index.css"

export default function Cart(){

    const {cart, cartDispatch} = useCartContext();

    function handleClick(i) {
        cartDispatch({type: "remove", i})

    }
    
    
    return (
        <div id="cart-page">
            <div className="cart-listings">
            <a href="/#">← Back to Homepage</a>

            <h1>Cart</h1>

            <ul>
                {cart.map((movie, i) => {
                    return (
                        <li key={movie.imdbID}>
                            {movie.Title}
                            <button onClick={() => {
                                handleClick(i)
                            }}>
                                Remove
                            </button>
                        </li>
                    )
                })}
            </ul>
            </div>
        </div>
    )

     

}