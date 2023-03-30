import React from "react";
import "./MovieRender.css"

const MovieRender = ({allMovies}) => {
    return(
        <button className="reload-movies-button " onClick = {allMovies}>Načti filmy</button>
    )
}

export default MovieRender