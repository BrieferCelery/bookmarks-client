import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { hot } from 'react-hot-loader'
import screenfull from 'screenfull'
import ReactPlayer from 'react-player'
import './VideoPlayer.css'

class VideoPlayer extends React.Component {
    render() {

        return(
            <div className="player-wrapper">
                 <ReactPlayer
                    playing = {true}
                    controls={true}
                    url="https://www.youtube.com/watch?v=KkF9Dz2g1nA"
                    className="react-player"
                 />
            </div>
        )
      }
   
}

export default VideoPlayer