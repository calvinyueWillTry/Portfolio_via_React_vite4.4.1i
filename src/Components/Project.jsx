import React from 'react';//controls rendering of page
import YouTube from "react-youtube";
function Project({portfolioType}) {//{defined props in React} ???
    if (portfolioType === "YouTube") {
        return (
            <div>
                <p>Riverside Chamber Symphony - Beethoven Eroica Symphony Movement 1 Excerpt</p>
                <YouTube videoId={"6G-bjFOWwL4"} />
                <p>Impressions of Paintings by Higashiyama Kaii Excerpt</p>
                <YouTube videoId={"hYAT6JsBEmQ"} />
                <p>The Battle of Mount (Addison Wong)</p>
                <YouTube videoId={"s9q89VYladE"} />
            </div>

    )
    }
    else if (portfolioType === "Music") {
        return "Music Performances";
    }
    else {return "Studio"}
};
export default Project;