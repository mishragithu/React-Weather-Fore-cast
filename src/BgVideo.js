import React  from "react";
import video from "./assets/video.mp4";

import "./App.css";



function BgVideo () {
    return(
     
        <div className="bgContainer bg-video">
         
            <div className="overlay">
            <video src = {video} autoPlay loop muted></video>
            </div>
        </div>
        
    );
}

export default BgVideo;
