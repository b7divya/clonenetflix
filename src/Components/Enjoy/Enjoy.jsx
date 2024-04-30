import React from 'react'
import "./Enjoy.css"


    function Enjoy () {
        return (
            <div className="main-enjoy">
                <div className="main-enjoy-container">
                    <div className="main-enjoy-container-left">
                        <div className="top">
                            <h2>Enjoy on your TV</h2>
                        </div>
                        <div className="bottom">
                            <h5>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h5>
                        </div>
                    </div>
                    <div className="main-enjoy-container-right">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="section1" width="400" height="300" />
                    <video className="enjoyVideo" width="400" height="300" controls autoPlay>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                    </video>
                    </div>
                </div>
            </div>
        )
    }

    export default Enjoy