import React from 'react';
function Project({portfolioType}) {//{defined props in React} ???
    if (portfolioType === "YouTube") {
        return (
            
            "YouTube List"
    )
    }
    else if (portfolioType === "Music") {
        return "Music Performances";
    }
    else {return "Studio"}
};
export default Project