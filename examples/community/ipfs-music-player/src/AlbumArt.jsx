import React, { useEffect, useState } from "react";
// We almost just want this to be passed in a image object or url and then send out an http request to 
// go retreve and render. In the encap player component. 
function AlbumArt({ image, width, height }) {

    const [centerX, setCenterX] = useState(window.innerWidth / 2);
    const [centerY, setCenterY] = useState((window.innerHeight / 2) - 75);
    useEffect(() => {
        setCenterX(window.innerWidth / 2);
        setCenterY((window.innerHeight / 2) - 75);
    }, [centerX, centerY]);
    

    const styles = {
        left: centerX - 150,
        top: centerY - 100
    };

    return(
        <img id="cover-art" src={image} alt="album cover art" style={ styles }></img>
    )
}

export default AlbumArt;