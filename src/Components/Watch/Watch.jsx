import React from 'react'
import "./Watch.css"

function Watch () {
    return (
        <div className="main-watch">
            <div className="main-watch-container">
                <div className="main-watch-container-left">
                    <div className="watch-top">
                        <h2>Watch everywhere</h2>
                    </div>
                    <div className="watch-bottom">
                        <h5>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h5>
                    </div>
                </div>
                <div className="main-watch-container-right">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="section1" width="400" height="300" />
                </div>
                <video className="watchVideo" width="400" height="300" controls autoPlay>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                </video> 
            </div>
        </div>
    )
}

export default Watch