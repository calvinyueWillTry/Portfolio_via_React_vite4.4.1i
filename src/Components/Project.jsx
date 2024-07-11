import React, { Component } from 'react';//controls rendering of page
import YouTube from "react-youtube";
    
class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        }
    }
    handleAudioPlay = () => {
        this.setState({ isPlaying: true });
        const audioEl = document.getElementsByClassName("audio-element")[0];
        audioEl.play()
    }
    render() {
        const { portfolioType } = this.props
    

//{defined props in React} ???
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
        return (//need to insert audio clips
                <div>
                    <p>Audio clips TBD</p>
                    <audio className="audio-element">
                        <source src='images/Pokemon Lance.Battle Remix.Mixeli.mp3' />
                    </audio>
                    <button onClick={this.handleAudioPlay}>Play Audio</button>
                </div>
        )
    }
    else {
        return (
        "Studio"
        )
    }
}
};
export default Project;
/**
 * <div>
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
 */