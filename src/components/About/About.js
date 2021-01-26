import React, { Component } from 'react'
import sample from "./Autumn.mp4"
import AbsoluteWrapper from "../AbsoluteWrapper"
import App from "./Spring"

export default class About extends Component {
    render() {
        return (
            
            <div>
                <video id="background-video-about" className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
                <div className="viewport-header">
                    <App></App>
                </div>
                
            </div>
            
        )
    }
}
