import React from "react";
function AlbumArt({ image }) {

    const styles = {
        left: `calc(50vw - 150px)`,
        top: `calc(50vh - 175px)`
    };

    return(
        <img id="cover-art" src={image} alt="album cover art" style={ styles }></img>
    )
}

export default AlbumArt;