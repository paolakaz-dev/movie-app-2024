import MovieThumbnail from "../Movie-Thumbnail"
import { useCartContext } from "../useContext/context"
import Search from "../Search"
import "../index.css"

/*
        function name() {
        
        }

        const name = () => {
        
        }

        ARRAY.sort(sortFn)
        ARRAY.toSorted(sortFn)

            sortFn must return a number
                0   -> keep in place
                >0  ->  move forward
                >0  ->  move back
        
        string1.localeCompare(string2)  -> -1 | 0 | 1
            English ->  ÅAABCD
            Swedish ->  XYZÅÄÖ
*/

export default function Home(){
    const { movies, movieDispatch } = useCartContext();

    const handleSortChange = (e) => {
        movieDispatch({ type: "sort", value: e.target.value })


    }

    return (
        <>
        <Search />
        <div className="select-section">
        <select name="" id="" onChange={handleSortChange}>
            <option value="">Select a sort</option>
            <option value="year-desc">Year (Desc)</option>
            <option value="year-asc">Year (Asc)</option>
            <option value="name-desc">Name (Desc)</option>
            <option value="name-asc">Name (Asc)</option>
        </select>
        </div>
        <div className="movieGrid">
            
            {movies.map((m) => {
                // "Prop drilling"
                // useContext + custom hook
                return (
                    <MovieThumbnail
                        // props saveCart, setCart
                         movie={m} 
                         key={m.imdbID}
                    />
                )
            })}
        </div>
        </>
    )


}