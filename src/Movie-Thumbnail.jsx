/*
    When calling a setState function, you have 2 options...
        1. pass in the new value
            setCount(count+1)
        2. pass a callback which takes in the current value, returns the new value
            setCount((currentCount)=>{
                return currentCount+1
            })

    Can we prevent duplicate movies from being added?
        Hint: keep track of the cart with an array of movies instead of a number

    Can we display the thumbnails in a grid? (CSS)

*/

// import "./movie-thumbnail.css";
/*
// function MovieThumbnail(props) {
function MovieThumbnail({movie, setCart}) {
    //                     Prop destructuring


    // handler function
    function handleClick() {
        // setCount((c) => {
        //     return c + 1
        // })
        setCart(c => c+1)
    }

    return (
        <>
            <div className="thumbnail">
                <h1>{movie.Title}</h1>
                <p>{movie.Year}</p>
                <img width="200px" src={movie.Poster} />
                <button onClick={handleClick}>Add to card</button>
            </div>
        </>
    )

    Higher-order array methods
        forEach -> undefined
        map     -> Array
        filter  -> Array
        find    -> any
        some    -> boolean
        every   -> boolean
        findIndex -> number

    Primitive
        number
        boolean
        string
        undefined
        null
    Non-primitive
        Array
        Object
        Function
        NaN ??
        Symbol
}


export default MovieThumbnail

    npm uninstall react-router-dom
    npm i react-router-dom
*/

// let x = [1, 2, 3]
// let y = [1, 2, 3]
// console.log(x === y) False

/*
        Components with children
            <Link>

            </Link>
        Components without chilren
            <Link />
*/

import { useCartContext } from "./useContext/context";
import { Route, Routes, Link, useParams } from "react-router-dom"

// Question: why here i do not have to defind the id? key? 
function MovieThumbnail({ movie }) { 

    const { cartDispatch } = useCartContext(); // useContext


   
    return (
        <>
            <div className="thumbnail">
            <Link to={`/movie/${movie.imdbID}`}>

                <h1>{movie.Title}</h1>
                <p>{movie.Year}</p>
                <img width="200px" src={movie.Poster} alt={`${movie.Title} poster`} />
            </Link>

                <button onClick={(e) => {
                    e.stopPropagation()
                    cartDispatch({ type: "add", movie: movie })
                }}>
                    Add to cart
                </button>
            </div>
        </>
    );
}

export default MovieThumbnail;
