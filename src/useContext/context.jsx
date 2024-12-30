import { createContext, useContext, useEffect, useReducer } from "react";
import initialMovies from "../movies";

/* all props: 
movies={movies} setCart={setCart} saveCart={saveCart} cart={cart}
 */

//  API KEY = 5996b0f2

/*
        https://    www.api.com     /products/byPrice   ?min=10&max=20&category=shoes
        protocol     domain             path             parameters / "search query"

        
*/


const initialCartContext = {
    cart: [],
    movies: [],
   setMovies: () => {},
    setCart: () => {},
    saveCart: () => {}
}

export const CartContext = createContext(initialCartContext);

export function useCartContext() {
    const cart = useContext(CartContext); // useContext

    if (cart === undefined){
        throw new Error("useCartContext must be used with CartContext");
    }

    return cart;

}

function getCart() {
    const json = localStorage.getItem("cart");
  
    // Check if json is null, undefined, or the string "undefined"
    if (!json || json === "undefined") {
      return [];
    }
  
    try {
      return JSON.parse(json);
    } catch (e) {
      console.error("Error parsing cart from localStorage:", e);
      return [];
    }
  }
  
  

function saveCart(newCart) {
  const json = JSON.stringify(newCart)
  localStorage.setItem("cart", json)
}

/*
    AJAX = "Asynchronous JavaScript [and XML]"
*/

function sortMoviesBy(movies, value) {

    movies.sort((a, b) => {
        if (value === "year-desc") {
            return b.Year - a.Year
        } else if (value === "year-asc") {
            return a.Year - b.Year
        } else if (value === "name-desc") {
            return b.Title.localeCompare(a.Title)

        } else if (value === "name-asc") {
            return a.Title.localeCompare(b.Title)

        }
    })


}

// movieDispatch({ type: "sort", value: "year-desc" })

function movieReducer(state, action) {
    const newMovies = [...state]
    switch (action.type) {
        case 'sort':
            sortMoviesBy(newMovies, action.value)
            return newMovies;
        case 'set':
            return action.movies
        default:
            throw new Error(`Invalid action: ${action.type}`);
    } 
}
function cartReducer(state, action) {
    const newCart = [...state]
    switch (action.type) {
        case 'add':
            newCart.push(action.movie)
            return newCart;
        case 'remove':
            newCart.splice(action.i, 1)
            return newCart;
        default:
            throw new Error();
    } 
}

export function CartContextProvider({ children }) {
    const [cart, cartDispatch] = useReducer(cartReducer, getCart());
    const [movies, movieDispatch] = useReducer(movieReducer, initialMovies);
    
    useEffect(()=>{
        saveCart()
    }, [cart])

    
    return (
        <CartContext.Provider value={{
            cart,
            movies,
            movieDispatch,
            cartDispatch,
        }}>
            { children }
        </CartContext.Provider>
    )
}