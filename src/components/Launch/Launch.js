import React, { Component, useState } from 'react'
import sample from "./Dandelion2.mp4"
import App from "./Spring"
import AbsoluteWrapper from '../AbsoluteWrapper'







export default class Launch extends Component {

   
    
    render() {
        
        return (
            <AbsoluteWrapper>
            <div>
                <video id="background-video" className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
                <div className="viewport-header">
                    <App></App>
                </div>
                
            </div>
            </AbsoluteWrapper>
        )
    }
}
