import { useRef, useState } from "react"
import { useCartContext } from "./useContext/context"


//  API KEY = 5996b0f2
// http://www.omdbapi.com/?apikey=5996b0f2&s=whatever

async function doFetch() {
    // wait for the http response
    const res = await fetch("http://www.omdbapi.com/?apikey=5996b0f2&s=asdfasdfasdfqwerqwerqw")
    // wait for the data to finish streaming
    // const data = await res.text()
    const data = await res.json()
    console.log("DATA:", data)
}

// doFetch()


export default function Search() {

    const {movieDispatch} = useCartContext();
    const [errorMessage, setErrorMessage] = useState("");

   



    const inputRef = useRef(null) // { current: null }
    const selectRef = useRef(null);
    
    async function searchFunction() {

        const res = await fetch(`http://www.omdbapi.com/?apikey=97656b20&s=${inputRef.current.value}&type=${selectRef.current.value}`);
        const data = await res.json()


        const handleClick = () => {
            setErrorMessage("Sorry, no results match your search criteria")
        }
        if (!data.Search) {
           return (
            handleClick()
           )

        } else {
            movieDispatch({ type: "set", movies: data.Search })
        }


    }

    return (
        <>
        <div className="search-input">
            <select ref={selectRef}>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
            </select>
            <input type="text" ref={inputRef} />
            <button onClick={searchFunction}>Search</button>
            {errorMessage && <div className="error"> {errorMessage} </div>}
        </div>
        </>
    )
}