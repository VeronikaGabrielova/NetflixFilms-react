import React from "react"
import "./MovieDeleteAllButton.css"



const MovieDeleteAllButton =({deleteAllButton})=> {
    return(
        <button className = "main-delete-button" onClick = {deleteAllButton}>Vymazat vše</button>
    )
}

export default MovieDeleteAllButton