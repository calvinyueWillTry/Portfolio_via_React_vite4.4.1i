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
                <p> Rain of Blessing (ECCC Congregation) </p>
                <YouTube videoId={"x9e6G93MoQ8"} />
                <p> Wrappin it up (University of Oregon Jazz Lab Band II) </p>
                <YouTube videoId={"ttpga1T-v-w"} />
                <p> Silent Night (ECCC Youth Group Instrumental Ensemble) </p>
                <YouTube videoId={"YKbXwZ_Vg30"} />
            </div>

    )
    }
    else if (portfolioType === "Music") {
        return (
            "Music Performances"
            
        )
    }
    else {return "Studio"}
};
export default Project;