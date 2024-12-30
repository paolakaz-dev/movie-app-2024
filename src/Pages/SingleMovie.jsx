// https://www.omdbapi.com/
// http://www.omdbapi.com/?apikey=[yourkey]&i=[imdbID goes here]

/*
        products/:category/:minPrice/:maxPrice

        params
        {
            category: "...",
            minPrice: "...",
            maxPrice: "..."
        }

        useEffect(()=>{
        
        }, [])
*/

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { useCartContext } from "../useContext/context"
import Ratings from "../Ratings";
import "../index.css"

export default function SingleMovie() {

    const { cartDispatch } = useCartContext();
    const [movie, setMovie] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();
     

    async function getMovie() {
        const res = await fetch(`http://www.omdbapi.com/?apikey=97656b20&s&i=${params.id}`)
        const data = await res.json();
        console.log(data)
        if (data.Response === "False") {
            setError(true)
        }else {
            setMovie(data)
        }
    }

    const params = useParams();
    useEffect(() => {
        getMovie();
    }, []);
    
if (error) {
        return (
            <>
            <div>
                <h2>Movie not found</h2>
                <button onClick={() => navigate("/")}>Return to Home</button>
            </div>
            </>
        )
}
console.log(movie)

return movie ? (

       <>
       <div className="single-movie">
        <div className="movie-info">
            
            <div className="movie-info-title">
            <a href="/#">← Back to Homepage</a>

                <h1>{movie.Title}</h1>
                <p>{movie.Plot}</p>
                <h2>Rating: {movie.imdbRating} out of {movie.imdbVotes}</h2>
                <Ratings  ratings={movie.Ratings}/>

            </div>
            <div className="movie-info-img">
                <img width="300px" src={movie.Poster} alt={`${movie.Title} poster`} />
                <button onClick={() => cartDispatch({ type: "add", movie })}>Add to cart</button>
            </div>



        </div>

       </div>
       </>
    ) : (
        <>
            Loading movie...
        </>
    )
}