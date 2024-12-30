/*
        JSX combines HTML and JS
            () means we've left js world and went to HTML world
            {} went back to js

        return (
            <p>Hello, {props.name}</p>
        )

        MovieThumbnail
*/



function Greeting(props) {
    
    return (
        <p>Hello, {props.name}</p>
    )
}

export default Greeting