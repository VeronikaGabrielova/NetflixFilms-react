import React from "react"
import "./MovieDeleteButton.css"

const MovieDeleteButton = ({deleteButton}) => {
    return(
<button className="movie-delete-button" onClick={deleteButton} type="button">Vymazat film</button>

    )
}

export default MovieDeleteButton